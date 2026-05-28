import fs from 'node:fs/promises'
import path from 'node:path'
import React from 'react'

import { BLOGS } from './blogs-data'

const BLOG_DIR = path.join(process.cwd(), 'blogs')

function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g)

  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={`${part}-${index}`}
          className="rounded bg-[#001081]/5 px-1.5 py-0.5 font-mono text-[0.92em] text-[#001081]"
        >
          {part.slice(1, -1)}
        </code>
      )
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>
    }

    return part
  })
}

function toParagraph(children: string, key: string) {
  return (
    <p key={key} className="mb-6 text-base leading-8 text-[#001081]/72">
      {parseInline(children)}
    </p>
  )
}

export function getBlogBySlug(slug: string) {
  return BLOGS.find((blog) => blog.slug === slug) ?? null
}

export function getAllBlogs() {
  return [...BLOGS]
}

export async function getBlogMarkdown(slug: string) {
  const blog = getBlogBySlug(slug)

  if (!blog) return null

  const markdown = await fs.readFile(path.join(BLOG_DIR, blog.fileName), 'utf8')
  return { blog, markdown }
}

export function renderMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const nodes: React.ReactNode[] = []
  let paragraphBuffer: string[] = []
  let listItems: string[] = []
  let blockquoteBuffer: string[] = []

  const flushParagraph = (key: string) => {
    if (!paragraphBuffer.length) return
    nodes.push(toParagraph(paragraphBuffer.join(' '), key))
    paragraphBuffer = []
  }

  const flushList = (key: string) => {
    if (!listItems.length) return
    nodes.push(
      <ul key={key} className="mb-8 list-disc space-y-2 pl-6 text-[#001081]/72">
        {listItems.map((item, index) => (
          <li key={`${key}-${index}`}>{parseInline(item)}</li>
        ))}
      </ul>,
    )
    listItems = []
  }

  const flushBlockquote = (key: string) => {
    if (!blockquoteBuffer.length) return
    nodes.push(
      <blockquote
        key={key}
        className="mb-8 border-l-4 border-[#2C6DF6] bg-[#2C6DF6]/5 px-5 py-4 text-lg leading-8 text-[#001081]"
      >
        <p>{parseInline(blockquoteBuffer.join(' '))}</p>
      </blockquote>,
    )
    blockquoteBuffer = []
  }

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      return
    }

    if (line === '---') {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      nodes.push(<hr key={`hr-${index}`} className="my-10 border-[#001081]/10" />)
      return
    }

    if (line.startsWith('# ')) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      nodes.push(
        <h2
          key={`h1-${index}`}
          className="mb-6 mt-10 text-2xl font-extrabold tracking-tight text-[#001081] lg:text-3xl"
        >
          {parseInline(line.slice(2))}
        </h2>,
      )
      return
    }

    if (line.startsWith('## ')) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      nodes.push(
        <h3 key={`h2-${index}`} className="mb-4 mt-8 text-xl font-bold text-[#001081] lg:text-2xl">
          {parseInline(line.slice(3))}
        </h3>,
      )
      return
    }

    if (line.startsWith('### ')) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      flushBlockquote(`quote-${index}`)
      nodes.push(
        <h4 key={`h3-${index}`} className="mb-3 mt-6 text-lg font-semibold text-[#001081]">
          {parseInline(line.slice(4))}
        </h4>,
      )
      return
    }

    if (line.startsWith('> ')) {
      flushParagraph(`p-${index}`)
      flushList(`ul-${index}`)
      blockquoteBuffer.push(line.slice(2))
      return
    }

    if (line.startsWith('* ') || line.startsWith('- ')) {
      flushParagraph(`p-${index}`)
      flushBlockquote(`quote-${index}`)
      listItems.push(line.slice(2))
      return
    }

    flushList(`ul-${index}`)
    flushBlockquote(`quote-${index}`)
    paragraphBuffer.push(line)
  })

  flushParagraph('p-end')
  flushList('ul-end')
  flushBlockquote('quote-end')

  return nodes
}
