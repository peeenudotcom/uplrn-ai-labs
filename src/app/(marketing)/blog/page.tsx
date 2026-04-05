import type { Metadata } from 'next';
import Link from 'next/link';
import { supabase, type Post } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Blog | Uplrn AI Labs',
  description: 'Insights, tutorials, and industry perspectives on AI tools, prompt engineering, and building a career in artificial intelligence.',
};

export const revalidate = 3600; // Revalidate every hour

const CATEGORY_COLORS: Record<string, string> = {
  'AI Tools': 'bg-blue-50 text-blue-700',
  'Industry News': 'bg-orange-50 text-orange-700',
  'Machine Learning': 'bg-purple-50 text-purple-700',
  'AI Career': 'bg-green-50 text-green-700',
  'Generative AI': 'bg-pink-50 text-pink-700',
  'AI Business': 'bg-amber-50 text-amber-700',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(20);

  const allPosts = (posts ?? []) as Post[];
  const [featured, ...rest] = allPosts;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#059669] to-[#0D9488] py-16 text-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Daily AI insights, industry news, and practical tips — written for Indian learners and professionals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {allPosts.length === 0 ? (
            <div className="text-center py-20 text-[#475569]">
              <p className="text-lg">First post coming soon — check back tomorrow!</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <Link href={`/blog/${featured.slug}`} className="group block mb-12">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[featured.category] ?? 'bg-gray-100 text-gray-600'}`}>
                        {featured.category}
                      </span>
                      <span className="text-xs text-[#94A3B8]">Featured</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-[#475569] leading-relaxed mb-4 max-w-3xl">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
                      <span>{formatDate(featured.created_at)}</span>
                      <span>·</span>
                      <span>{featured.read_time}</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Rest of posts */}
              {rest.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                      <div className="h-full rounded-xl border border-[#E2E8F0] bg-white p-6 hover:shadow-md transition-shadow">
                        <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${CATEGORY_COLORS[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                          {post.category}
                        </span>
                        <h3 className="font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors mb-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#475569] leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                          <span>{formatDate(post.created_at)}</span>
                          <span>·</span>
                          <span>{post.read_time}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
