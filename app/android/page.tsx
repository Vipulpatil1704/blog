'use client'
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner/Spinner';
import { toast } from 'react-toastify';
import Link from 'next/link';
import BlogWrapper from '../components/BlogWrapper/BlogWrapper';
import BlogComponent from '../components/Blog/Blog';
import { Blog } from '../page';
const android = () => {
  const [blogs, setBlogs] = useState<Blog[]>([{id:1, title:"how to use nextjs", date:"31/03/25", content:"Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose", author:"TechCik",slug:"how-to-use-nextjs", category:"android"}]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/blogs");
        if (!res.ok) {
          throw new Error("Unable to fetch blogs");
        }
        const data = await res.json();
        setBlogs(blogs.filter((item:Blog)=>item.category === "android"))
        setIsLoading(false);
      } catch (error) {
        // console.error(error);   
        setIsLoading(false);
        toast.error(error instanceof Error ? error.message : "Something went wrong");
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
       {blogs ? blogs.map((blog)=>{
        return  <Link key={blog.id} href={`blogs/${blog.slug}`}>
        <BlogWrapper>
          <BlogComponent
            title={blog.title}
            author={blog.author}
            date={blog.date}
            content={blog.content}
          />
        </BlogWrapper>
      </Link>
      }) : <p>No Blogs Available.</p>}
    </div>
  )
}

export default android