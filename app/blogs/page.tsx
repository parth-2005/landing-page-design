import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { getAllBlogs } from '@/lib/blogs'

export default function BlogsPage() {
  const blogs = getAllBlogs()

  return (
    <>
      <section className="border-b border-[#001081]/8 bg-gradient-to-b from-[#F2F3F3] to-[#FFFEFF]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6]">
              Blogs
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#001081] lg:text-6xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Research-backed thinking for FMCG teams.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#001081]/58">
              Three long-form articles from the ForecastHUB panel lab, each built from the markdown notes in this workspace.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group overflow-hidden rounded-3xl border border-[#001081]/8 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Link href={`/blogs/${blog.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F3F3]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#2C6DF6]">
                    <span>{blog.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[#2C6DF6]/30" />
                    <span>{blog.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#001081]">
                    {blog.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#001081]/58">
                    {blog.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2C6DF6]">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}