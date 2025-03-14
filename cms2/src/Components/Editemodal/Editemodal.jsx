import React from 'react'
import ReactDom from 'react-dom'
export default function Editemodal({children,close,onSubmit}) {
  const closeModale = ()=>{
    close();
    document.getElementById('modalparent').style.visibility="hidden";

  }
  const submitEdit = (event)=>{
    event.preventDefault();
    onSubmit();
    close();
    document.getElementById('modalparent').style.visibility="hidden";
  }
  return ReactDom.createPortal (
    <div className='bg-white w-1/3 p-10 rounded-2xl'>
      <form className='w-full flex flex-col items-center' action="#">
        <h1>اطلاعات جدید را وارد کنید</h1>
        {children}
        <div className='w-full'>
          <button onClick={submitEdit} className='bg-blue-custom text-white cursor-pointer shadow-md shadow-gray-700 w-1/2 h-8 mt-3 rounded-3xl'>ثبت تغییرات</button>
          <button onClick={closeModale} className='bg-blue-custom text-white cursor-pointer shadow-md shadow-gray-700 w-1/2 h-8 mt-3 rounded-3xl'>بستن</button>
        </div>
      </form>
    </div>,document.getElementById("modalparent")
  )
}
