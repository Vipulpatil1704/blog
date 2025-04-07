"use client";
import BlogComponent from "@/app/components/Blog/Blog";
import BlogWrapper from "@/app/components/BlogWrapper/BlogWrapper";
import ErrorComponent from "@/app/components/Error/Error";
import Spinner from "@/app/components/Spinner/Spinner";
import { Blog } from "@/app/page";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const BlogPage = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [blog, setBlog] = useState<Blog>({
    title: "how to use nextjs",
    date: "31/03/25",
    content:
      "Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
    author: "TechCik",
    slug: "how-to-use-nextjs",
    category: "android",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, SetError] = useState<string>();
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [isRelatedLoading, setIsRelatedLoading] = useState<boolean>();
  const [isRelatedError, setIsRelatedError] = useState<string>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:8000/blogs/${slug}`);
        if (!res.ok) {
          throw new Error("Unable to fetch Blog");
        }
        const data = await res.json();
        setBlog(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        SetError(
          error instanceof Error ? error.message : "Something went wrong"
        );
        toast.error(
          error instanceof Error ? error.message : "Something went wrong"
        );
      }
    };
    fetchData();
  }, [slug]);
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        setIsRelatedLoading(true);
        const res = await fetch(`http://localhost:8000/related-blogs/${slug}`);
        if (!res.ok) {
          throw new Error("Unable to fetch related blogs");
        }
        const data = await res.json();
        setRelatedBlogs(data);
      } catch (error) {
        setIsRelatedLoading(false);
        setIsRelatedError(
          error instanceof Error
            ? error.message
            : "Unable to fetch related blogs"
        );
      }
    };
    fetchRelatedBlogs();
  }, []);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  // if (error) {
  //   return <ErrorComponent error={error}/>
  // }
  return (
    <div>
      {blog ? (
        <BlogComponent
          title={blog.title}
          author={blog.author}
          date={blog.date}
          content={blog.content}
        />
      ) : (
        <div>Unable to fetch Blog</div>
      )}
      <h1 className="text-2xl border-b-2 mt-5 mb-2">Related Blogs</h1>
      {isRelatedLoading ? <Spinner/>  :  isRelatedError ? <ErrorComponent error={isRelatedError}/> : relatedBlogs  ? relatedBlogs.length > 0 ? (
        relatedBlogs.map((blog) => (
          <BlogWrapper>
            <BlogComponent
              key={blog.id}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              content={blog.content}
            />
          </BlogWrapper>
        ))
      ) : (
        <div>No related Blogs...</div>
      ) : <div>Error</div>}
    </div>
  );
};

export default BlogPage;
