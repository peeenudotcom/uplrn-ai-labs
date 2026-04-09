import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import RSSParser from 'rss-parser';
import { createServiceClient } from '@/lib/supabase';

const RSS_FEEDS = [
  'https://techcrunch.com/category/artificial-intelligence/feed/',
  'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
  'https://venturebeat.com/category/ai/feed/',
  'https://feeds.feedburner.com/oreilly/radar/atom',
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .slice(0, 80) + '-' + Date.now();
}

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

type RSSItem = {
  title?: string;
  contentSnippet?: string;
  summary?: string;
  link?: string;
};

async function fetchArticles(): Promise<RSSItem[]> {
  const parser = new RSSParser();
  for (const feedUrl of RSS_FEEDS) {
    try {
      const feed = await parser.parseURL(feedUrl);
      if (feed.items.length > 0) {
        return feed.items.slice(0, 10) as RSSItem[];
      }
    } catch {
      continue;
    }
  }
  return [];
}

export async function GET(req: NextRequest) {
  return handler(req);
}

export async function POST(req: NextRequest) {
  return handler(req);
}

async function handler(req: NextRequest) {
  // Auth check — Vercel cron sends CRON_SECRET, manual calls need the same
  const authHeader = req.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const articles = await fetchArticles();
    if (articles.length === 0) {
      return NextResponse.json({ error: 'No articles fetched from RSS feeds' }, { status: 500 });
    }

    // Pick a random article from the top 5
    const article = articles[Math.floor(Math.random() * Math.min(5, articles.length))];
    const title = article.title ?? 'Latest AI News';
    const summary = article.contentSnippet ?? article.summary ?? '';

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    // Get category
    const categoryRes = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 15,
      messages: [{
        role: 'user',
        content: `Classify this AI news headline into ONE category. Options: AI Tools, Industry News, Machine Learning, AI Career, Generative AI, AI Business. Headline: "${title}". Reply with only the category name.`,
      }],
    });
    const category = (categoryRes.content[0] as { text: string }).text.trim();

    // Generate blog post
    const blogRes = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: `You are a blog writer for TARAhut AI Labs, an AI education platform in Kotkapura, Punjab, India teaching practical AI skills to professionals, students, and business owners across India.

Write an insightful blog post inspired by this AI news:
Headline: ${title}
Summary: ${summary}

Rules:
- 650–750 words
- Audience: Indian professionals, students, entrepreneurs wanting to learn and apply AI
- Start with a strong hook — no generic "Introduction" heading
- Use ## headings to structure sections
- Include 2–3 practical takeaways relevant to Indian learners
- Mention real tools or concepts where helpful
- End with a motivational call to action about learning AI
- Do NOT copy or directly reference the source article — write as original insight
- Friendly, clear, slightly energetic tone

Respond ONLY with valid JSON in this exact format:
{
  "title": "compelling original blog title",
  "excerpt": "2-sentence blog summary under 160 characters",
  "content": "full markdown blog post here"
}`,
      }],
    });

    const raw = (blogRes.content[0] as { text: string }).text;
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('Claude did not return valid JSON');

    const post = JSON.parse(jsonMatch[0]) as { title: string; excerpt: string; content: string };
    const slug = slugify(post.title);
    const readTime = estimateReadTime(post.content);

    const db = createServiceClient();
    const { data, error } = await db
      .from('posts')
      .insert({
        title: post.title,
        slug,
        excerpt: post.excerpt,
        content: post.content,
        category,
        read_time: readTime,
        source_url: article.link ?? null,
        source_title: title,
        published: true,
      })
      .select()
      .single();

    if (error) throw new Error(error.message);

    return NextResponse.json({ success: true, post: data });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Blog generate error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
