import React, { useEffect, useState } from 'react'
import Deletemodal from '../../Deletemodal/Deletemodal';
import Detailmodal from '../../Detailmodal/Detailmodal';
import Editemodal from '../../Editemodal/Editemodal';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbNumber123 } from "react-icons/tb";
import { FaAirbnb } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { FaRegGrinStars } from "react-icons/fa";
import Errorbox from "../../Errorbox/Errorbox"


export default function Producttable() {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditeModal, setShowEditeModal] = useState(false);
  const [allproduct, setAllproduct] = useState([])

  const openDeleteModa = () => {
    document.getElementById('modalparent').style.visibility = "visible";
    setShowDeleteModal(true)
  }
  function closeDeletemodale() {
    setShowDeleteModal(false)
  }

  function openDeailmodal() {
    document.getElementById('modalparent').style.visibility = "visible";
    setShowDetailModal(true)
  }

  function closeDetailModal() {
    setShowDetailModal(false)
  }

  function openEditemodal() {
    document.getElementById('modalparent').style.visibility = "visible";
    setShowEditeModal(true)
  }
  function submitProductEdite(event) {
    event.preventDefault();
    console.log("submited")
  }

  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json()).then((data) => { setAllproduct(data) })
  }, [])

  return (
    <>
      {
        allproduct.length ? (
          <table className='w-3/4 bg-white rounded-2xl mt-5'>
            {
              allproduct.map((product, index) => (
                <>
                  <tr className='text-center border-t-1 border-solid border-black '>
                    <th>عکس</th>
                    <th>نام</th>
                    <th>قیمت</th>
                    <th>موجودی</th>
                  </tr>
                  <tr className='text-center'>
                    <td className="">
                      <img className='w-35 h-35 object-cover' src={product.img} alt="product" />
                    </td>
                    <td>
                      {product.title}
                    </td>
                    <td>
                      {product.price}
                    </td>
                    <td>
                      {product.count}
                    </td>
                    <td>
                      <button onClick={openDeailmodal} className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>جزئیات</button>
                      <button onClick={openDeleteModa} className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>حذف</button>
                      <button onClick={openEditemodal} className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>ویرایش</button>
                    </td>
                  </tr>

                </>
              ))}
          </table>
        ) : (
          <Errorbox msg="هیچ محصولی یافت نشد" />
        )
      }

      {showDeleteModal && <Deletemodal close={closeDeletemodale} />}
      {showDetailModal && <Detailmodal close={closeDetailModal} />}
      {showEditeModal && <Editemodal close={() => { setShowEditeModal(false) }} onSubmit={submitProductEdite}>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <MdDriveFileRenameOutline className='text-2xl' /> <input className='w-full  p-1 text-center outline-0 ' type="text" placeholder='نام' />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <TbNumber123 className='text-2xl' /> <input className='w-full  p-1 text-center outline-0 ' type="text" placeholder='موجودی' />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <FaDollarSign className='text-2xl' /> <input className='w-full  p-1 text-center outline-0 ' type="text" placeholder='قبمت' />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <FaAirbnb className='text-2xl' /> <input className='w-full  p-1 text-center outline-0 ' type="text" placeholder='ادرس عکس' />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <IoIosColorPalette className='text-2xl' /> <input className='w-full  p-1 text-center outline-0 ' type="text" placeholder='تعداد رنگ بندی' />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <FaRegGrinStars className='text-2xl' /> <input className='w-full  p-1 text-center outline-0 ' type="text" placeholder='حبوبیت(درصد)' />
        </div>
      </Editemodal>}
    </>

  )
}
