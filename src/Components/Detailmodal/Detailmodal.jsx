import React from 'react'
import ReactDom from "react-dom"
export default function Detailmodal({close}) {
  const closeModale = ()=>{
      close();
      document.getElementById('modalparent').style.visibility="hidden";
  
    }
  return ReactDom.createPortal(
    <>
      <div className=' w-1/3  p-10 bg-white rounded-2xl'>
        <h3 className='mb-4 text-black'>جزئیات محصول</h3>
        <table className=' w-full border-2 border-solid border-black'>
            <tr className='text-right border-b-2 border-solid border-black  flex justify-between'>
                <th>نام</th>
                <th>قیمت</th>
                <th>محبوبیت</th>
            </tr>
            <tr className='text-right flex justify-between'>
                <td>لپتاپ</td>
                <td>43,000,000</td>
                <td>91</td>
            </tr>
        </table>
        <button onClick={closeModale} className='bg-blue-custom text-white cursor-pointer shadow-md shadow-gray-700 w-full h-8 mt-3 rounded-3xl'>بستن</button>
      </div>
    </>,document.getElementById("modalparent")
  )
}
