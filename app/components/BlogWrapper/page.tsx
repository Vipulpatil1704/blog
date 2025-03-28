import React from 'react'

const BlogWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='shadow-lg inset-shadow-2xs inset-shadow-blue-200 shadow-blue-200 m-2 p-2 h-[150px] overflow-clip mb-5 md:w-3/5'>
        {children}
    </div>
  )
}

export default BlogWrapper