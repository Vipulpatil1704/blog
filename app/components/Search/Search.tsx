'use client'
import React, { useState } from "react";

const Search = () => {
  const [data, setData] = useState<string>();
  const [isLoading , setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const handleSumit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searched...");
  }
  return (
    <div>
      <form onSubmit={(e) => handleSumit(e)} className="flex gap-x-3">
        <input type="text" placeholder="search..." className="basis-2/3 border-2 p-1"/>
        <button type="submit" className="basis-1/3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Search;
