import React from 'react'

const Error = ({error}:{error:string}) => {
  return (
    <div className="text-center p-4 text-red-500">
    <p>{error}</p>
  </div>
  )
}

export default Error