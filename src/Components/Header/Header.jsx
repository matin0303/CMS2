import React from 'react'
import { FaRegBell } from "react-icons/fa6";
import { BsBrightnessHigh } from "react-icons/bs";


export default function Header() {
  return (
    <div className='flex w-full justify-between items-center'>
      <div className='flex items-center gap-x-2 mr-3'>
        <img className="w-12 h-12 rounded-4xl"  src="/images/admin-prof.jpg" alt="admin profile" />
        <div>
            <h1 className='text-[1.2rem]'>متین پیرمحمدی</h1>
            <h3 className='text-[1 rem] text-gray-700' >برنامه نویس فرانت اند</h3>
        </div>
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='bg-white rounded-2xl w-sm h-10 flex items-center shadow-xl'>
            <input className='m-2 w-full outline-0' type="text" placeholder='جست و جو کنید'/>
            <button className='text-nowrap m-1 p-1.5 text-white bg-blue-custom rounded-[1rem] cursor-pointer'>جست و جو</button>
        </div>
        <button className='felx justify-center items-center bg-blue-custom p-3 rounded-[0.5rem] shadow-xl text-white cursor-pointer'><FaRegBell/></button>
        <button className='felx justify-center items-center bg-blue-custom p-3 rounded-[0.5rem] shadow-xl text-white cursor-pointer'><BsBrightnessHigh/></button>
      </div>
    </div>
  )
}
