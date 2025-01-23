import { BlogCard } from '@/components/BlogCard'
import { Faq } from '@/components/Faq'
import { UserDialog } from '@/components/UserDialog'
import React from 'react'

export default function page() {
  return (
    <div>
      <Faq/>
      <BlogCard/>
      <UserDialog/>
    </div>
  )
}
