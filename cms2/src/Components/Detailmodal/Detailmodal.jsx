import React from 'react'
import ReactDom from "react-dom"
export default function Detailmodal({close ,children}) {
  const closeModale = ()=>{
      close();
      document.getElementById('modalparent').style.visibility="hidden";
  
    }
  return ReactDom.createPortal(
    <>
      <div className=' w-[90%]  p-10 bg-white rounded-2xl'>
        {children}
        <button onClick={closeModale} className='bg-blue-custom text-white cursor-pointer shadow-md shadow-gray-700 w-full h-8 mt-3 rounded-3xl'>بستن</button>
      </div>
    </>,document.getElementById("modalparent")
  )
}
