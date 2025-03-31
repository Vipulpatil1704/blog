'use client'
import BlogComponent from '@/app/components/Blog/Blog'
import { Blog } from '@/app/page'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const BlogPage = () => {
    const params = useParams<{slug:string}>()
    const slug = params.slug;
    const [blog , setBlog] = useState<Blog>()
    useEffect(()=>{
      
    },[])
  return (
    <div>
        {/* <BlogCComponent title={title} author={author} date={date} content={content}/> */}
    </div>
  )
}

export default BlogPage