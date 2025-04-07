"use client";

import BlogListPage from "./components/BlogListPage/BlogListPage";

export type Blog = {
  id ? : number,
  title: string,
  slug : string,
  category : string,
  author: string;
  date: string;
  content: string;
};
export default function Home() {

  return (
    <BlogListPage category={null}/>
  );
}
