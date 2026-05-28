import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'

import { getAllBlogs, getBlogMarkdown, renderMarkdown } from '@/lib/blogs'

type BlogPageProps = {
  params: {
    slug: string
  } | Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const blogData = await getBlogMarkdown(slug)

  if (!blogData) {
    return {
      title: 'Blog not found',
    }
  }

  return {
    title: `${blogData.blog.title} | ForecastHUB`,
    description: blogData.blog.excerpt,
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  const blogData = await getBlogMarkdown(slug)

  if (!blogData) {
    notFound()
  }

  const { blog, markdown } = blogData
  const body = markdown.split(/\r?\n/)
  const firstHeadingIndex = body.findIndex((line) => line.trim().startsWith('# '))
  const content = firstHeadingIndex >= 0 ? body.slice(firstHeadingIndex + 1).join('\n') : markdown

  return (
    <>
      <section className="border-b border-[#001081]/8 bg-gradient-to-b from-[#F2F3F3] to-[#FFFEFF]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
          <div>
            <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C6DF6] transition-colors hover:text-[#001081]">
              <ArrowLeft className="h-4 w-4" />
              Back to blogs
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#2C6DF6]">
              <span>{blog.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#2C6DF6]/30" />
              <span>{blog.readTime}</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#001081] lg:text-6xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              {blog.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#001081]/58">
              {blog.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/blogs" className="btn-secondary">
                Explore all articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#001081]/8 bg-white shadow-sm">
            <div className="relative aspect-[16/11]">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <article className="max-w-none">{renderMarkdown(content)}</article>
      </section>
    </>
  )
}