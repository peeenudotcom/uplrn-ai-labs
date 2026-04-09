import { MetadataRoute } from 'next'
import { createServiceClient } from '@/lib/supabase'

const BASE_URL = 'https://uplrn-ai-labs.vercel.app'

const staticRoutes = [
  '',
  '/courses',
  '/about',
  '/blog',
  '/contact',
  '/partner',
  '/tools',
  '/resources',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const db = createServiceClient()

  // Fetch published blog posts
  const { data: posts } = await db
    .from('posts')
    .select('slug, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false })

  const blogRoutes: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.created_at),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const staticSitemap: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...staticSitemap, ...blogRoutes]
}
