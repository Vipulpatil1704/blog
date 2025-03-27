import React from 'react'

const Blog = ({title, author, date, content}:{title:string,author:string,date:string,content:string}) => {
  return (
    <div className='m-2 p-2 shadow-xl shadow-blue-200 mt-4 flex justify-center md:w-3/5'>
        <div className='w-full'>
            <div className='w-full text-center'>Title</div>
            <div>
                <div>Author</div>
                <div>27/03/25</div>
            </div>
           
        </div>
    </div>
  )
}

export default Blog