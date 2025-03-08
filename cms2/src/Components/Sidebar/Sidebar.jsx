import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuListOrdered } from "react-icons/lu";
import { MdOutlineLocalOffer } from "react-icons/md";


export default function Sidebar() {
  return (
    <div className='fixed bg-blue-custom h-screen  '>
      <h1 className='text-xl text-white p-4 text-right border-b-1 border-solid border-white'>به داشبورد خود خوش آمدید</h1>
      <ul className='mt-5'>
        <NavLink to="/" className='relative p-4  w-full no-underline text-white flex items-center'>
          <AiOutlineHome className='text-2xl' />صفحه اصلی
        </NavLink>
        <NavLink to="/Products" className='relative p-4 w-full no-underline text-white flex items-center'>
          <AiFillProduct /> محصولات
        </NavLink>
        <NavLink to="/Comments" className='relative p-4 w-full no-underline text-white flex items-center'>
          <FaRegComments />  کامنت ها
        </NavLink>
        <NavLink to="/Users" className='relative p-4 w-full no-underline text-white flex items-center'>
          <FiUsers /> کاربران
        </NavLink>
        <NavLink to="/Orders" className='relative p-4 w-full no-underline text-white flex items-center'>
          <LuListOrdered />سفارشات
        </NavLink>
        <NavLink to="Offs" className='relative p-4 w-full no-underline text-white flex items-center'>
          <MdOutlineLocalOffer />تخفیف ها
        </NavLink>
      </ul>
    </div>
  )
}
