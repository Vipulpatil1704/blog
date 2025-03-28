import React from "react";

const Blog = ({
  title,
  author,
  date,
  content,
}: {
  title: string;
  author: string;
  date: string;
  content: string;
}) => {
  return (
    <div className="flex justify-center flex-col">
      <div className="w-full mt-1 mb-1">
        <div className="w-full text-center font-bold">{title}</div>
        <ul className="list-inside list-disc flex gap-x-[1em] p-1 border-b">
            <li>{author}</li>
            <li>{date}</li>
        </ul>
      </div>
      <div className="mt-1 mb-1">
        {content}
      </div>
    </div>
  );
};

export default Blog;
