import type { ReactNode } from 'react'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function BlogsLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="min-h-screen bg-[#FFFEFF] text-[#001081]">
      <SiteHeader variant="content" />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
