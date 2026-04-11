import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { requireAdmin, AdminAuthError } from '@/lib/admin'

const client = new Anthropic()

const SYSTEM_PROMPT = `You are the editor of TARAhut AI Labs' weekly newsletter called "Weekly AI Insights".

ABOUT TARAHUT AI LABS:
- Punjab's first practical AI training center based in Kotkapura
- Teaches AI skills (ChatGPT, Claude, Canva AI, Midjourney, Python, automation) to students, freelancers, business owners
- Audience: BCom/BBA/BA students, freelancers, small business owners, parents of school kids (ages 10-16), career changers — all from Punjab and surrounding regions
- Tone: Friendly, practical, Hinglish-capable (English base with occasional natural Hindi words like "ab", "yeh", "mast", "kaam")
- Focus: Real outcomes — freelancing income, job placement, business growth — NOT theory

NEWSLETTER FORMAT (REQUIRED — exactly these 3 sections every week):
1. 🎯 PRACTICAL AI TIP — one specific, actionable tip users can apply in 5 minutes. Include a before/after example.
2. 🔧 TOOL OF THE WEEK — one AI tool breakdown. Rotate between: ChatGPT, Claude, Canva AI, Midjourney, Python, Notion AI, Perplexity, ElevenLabs, HeyGen, Gamma. Include: what it does, when to use it, free vs paid, your rating out of 5.
3. 💼 REAL USE CASE — a short 150-word story of how someone (student, freelancer, business owner, preferably Indian/Punjab-based) used AI to save time or make money. Can be hypothetical but realistic.

STYLE RULES:
- Output format: HTML fragment (NOT a full HTML document — just the body content that will be inserted into our template)
- Use <h1> for the main headline, <h2> for section headings
- Wrap each of the 3 sections in: <div class="section"><span class="section-tag">TIP / TOOL / USE CASE</span> ... </div>
- Keep total length 350-500 words
- Write like you're talking to a friend, not a corporate memo
- Use short paragraphs (2-3 sentences max)
- Include ONE specific number, price, or stat somewhere to feel concrete
- End with "- Parveen, TARAhut AI Labs"
- DO NOT include <html>, <body>, <head>, or <style> tags
- DO NOT include an unsubscribe link (our template adds that)
- DO NOT link to tarahutailabs.com/courses (template adds a CTA)

TONE EXAMPLES:
- Good: "Stop writing 'Please' in your ChatGPT prompts. It wastes tokens and adds zero value. Here's what actually works instead..."
- Bad: "In today's rapidly evolving AI landscape, we must learn to craft our prompts effectively."
- Good: "Last week a student from Ludhiana used Canva AI to redesign his salon's Instagram — 200 to 2000 followers in 30 days. Here's how..."
- Bad: "Our students consistently achieve remarkable results through our comprehensive training programs."

Be specific. Be useful. Be human.`

export async function POST(req: NextRequest) {
  try {
    await requireAdmin()

    const { theme, previousTopics } = (await req.json().catch(() => ({}))) as {
      theme?: string
      previousTopics?: string[]
    }

    const userPrompt = [
      `Draft this week's "Weekly AI Insights" newsletter.`,
      theme ? `\nOptional theme or angle the editor wants: ${theme}` : '',
      previousTopics?.length
        ? `\nTopics already covered in recent issues (avoid repeating these tools/angles): ${previousTopics.join(', ')}`
        : '',
      `\nOutput a JSON object with exactly two keys:
{
  "subject": "a compelling email subject line, 40-60 chars, no clickbait but intriguing",
  "html": "the HTML body fragment following the format above"
}`,
    ].join('\n')

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPrompt }],
    })

    // Extract text content
    const textBlock = message.content.find((b) => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('No text in Claude response')
    }
    const raw = textBlock.text

    // Parse JSON — Claude sometimes wraps in ```json``` blocks
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Could not find JSON in response')
    }
    const parsed = JSON.parse(jsonMatch[0]) as { subject: string; html: string }

    if (!parsed.subject || !parsed.html) {
      throw new Error('Missing subject or html in response')
    }

    return NextResponse.json({
      subject: parsed.subject,
      html: parsed.html,
    })
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status })
    }
    console.error('Newsletter generate error:', error)
    const message = error instanceof Error ? error.message : 'Generation failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
