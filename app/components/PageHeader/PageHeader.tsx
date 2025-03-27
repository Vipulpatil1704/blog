import React from 'react'

const PageHeader = ({title}:{title:string}) => {
  return (
    <div className="flex w-full  shadow-lg p-3">
        {title}
    </div>
  )
}

export default PageHeader