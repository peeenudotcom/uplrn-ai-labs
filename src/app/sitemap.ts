import { MetadataRoute } from 'next'
import { createServiceClient } from '@/lib/supabase'
import { siteConfig } from '@/config/site'
import { courses } from '@/config/courses'
import { schoolCourses } from '@/config/school-courses'

const staticRoutes = [
  '',
  '/courses',
  '/about',
  '/blog',
  '/contact',
  '/faq',
  '/partner',
  '/privacy',
  '/refund',
  '/terms',
  '/tools',
  '/resources',
  '/assess',
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
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.created_at),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // All course pages (main courses + school courses, de-duped by slug)
  const allCourseSlugs = [
    ...courses.map((c) => c.slug),
    ...schoolCourses
      .map((c) => c.slug)
      .filter((slug) => !courses.some((c) => c.slug === slug)),
  ]

  const courseRoutes: MetadataRoute.Sitemap = allCourseSlugs.map((slug) => ({
    url: `${siteConfig.url}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const staticSitemap: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...staticSitemap, ...courseRoutes, ...blogRoutes]
}
