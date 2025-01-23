import { BlogCard } from '@/components/BlogCard'
import { Faq } from '@/components/Faq'
import { Button } from '@/components/ui/button'
import { UserDialog } from '@/components/UserDialog'
import React from 'react'

export default function page() {
  return (
    <div>
      <div>
      <Button variant="outline">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline">Button</Button>


      </div>
      <Faq/>
      <BlogCard/>
      <UserDialog/>
    </div>
  )
}
