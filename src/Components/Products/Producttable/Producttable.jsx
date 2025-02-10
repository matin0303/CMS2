import React, { useState } from 'react'
import Deletemodal from '../../Deletemodal/Deletemodal';

export default function Producttable() {
  
  const [showDeleteModal,setShowDeleteModal] = useState(false);

  const openDeleteModa = ()=>{
    document.getElementById('modalparent').style.visibility="visible";
    setShowDeleteModal(true)
  }
  return (
    <>
    <table className='w-3/4 bg-white rounded-2xl mt-10'>
      <tr className='text-center'>
        <th>عکس</th>
        <th>نام</th>
        <th>قیمت</th>
        <th>موجودی</th>
      </tr>
      <tr className='text-center'>
        <td className="">
            <img className='w-35 h-35 object-cover' src="images/airpod.png" alt="product" />
        </td>
        <td>
            ایرپاد
        </td>
        <td>
            1200 تومان
        </td>
        <td>
            492
        </td>
        <td>
            <button className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>جزئیات</button>
            <button onClick={openDeleteModa} className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>حذف</button>
            <button className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>ویرایش</button>
        </td>
      </tr>
    </table>
    {showDeleteModal&&<Deletemodal/>}
    </>

  )
}
