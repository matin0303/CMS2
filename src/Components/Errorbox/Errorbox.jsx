import React from 'react'

export default function Errorbox({msg}) {
  return (
    <div className='flex justify-center items-center mt-4 w-2/3 h-10 text-white bg-red-400 '>
      <h2>{msg}</h2>
    </div>
  )
}
