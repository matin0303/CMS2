import React from 'react'

export default function Addnewproduct() {
  return (
    <div className='self-center w-3/4'>
      <h1 className='text-[1.5rem]'>افزودن محصول جدید</h1>
      <form className=' h-100 p-4 self-center bg-white rounded-2xl flex flex-wrap ' action="#">
        <div className='w-1/2  flex justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' type="text" placeholder='نام محصول را وارد کنید' />
        </div>
        <div className='w-1/2 flex justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' type="text" placeholder='موجودی محصول را وارد کنید' />
        </div>
        <div className='w-1/2 flex  justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' type="text" placeholder='قیمت محصول را وارد کنید' />
        </div>
        <div className='w-1/2  flex justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' type="text" placeholder='ادرس عکس محصول را وارد کنید' />
        </div>
        <div className='w-1/2 flex  justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' type="text" placeholder='تعداد رنگ بندی محصول را وارد کنید' />
        </div>
        <div className='w-1/2 flex justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' type="text" placeholder='میزان محبوبیت محصول را وارد کنید' />
        </div>
        <div className='w-full flex justify-center items-center '>
          <button className='bg-blue-custom text-white cursor-pointer shadow-md shadow-gray-700 w-3/4 h-10 rounded-3xl'>ثبت محصول</button>
        </div>
      </form>
    </div>
  )
}
