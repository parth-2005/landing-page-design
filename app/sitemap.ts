import type { MetadataRoute } from 'next'

import { getAllBlogs } from '@/lib/blogs'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/contact', '/blogs', '/privacy', '/terms', '/security'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const blogRoutes = getAllBlogs().map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...blogRoutes]
}
