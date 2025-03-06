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
  const [allproduct, setAllproduct] = useState([]);
  const [productId, setProductId] = useState(null);
  const [productInfo, setProductInfo] = useState({});

  const [productNewTitel, setProductNewTitel] = useState('');
  const [productNewCount, setProductNewCount] = useState('');
  const [productNewPrice, setProductNewPrice] = useState('');
  const [productNewUrl, setProductNewUrl] = useState('');
  const [productNewColor, setProductNewColor] = useState('');
  const [productNewPopularity, setProductNewPopularity] = useState('');
  const [productNewSale, setProductNewSale] = useState('');






  const openDeleteModa = () => {
    document.getElementById('modalparent').style.visibility = "visible";
    setShowDeleteModal(true)
  }
  function getAllProduct() {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json()).then((data) => { setAllproduct(data) })
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
  function submitProductEdite() {

    const productNewInfo = {
      title: productNewTitel,
      price: productNewPrice,
      count: productNewCount,
      img: productNewUrl,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColor,
    }

    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productNewInfo)
    }).then(res => res.json())
      .then(result => {
        getAllProduct()
      })
  }

  function deleteProduct() {
    fetch(`http://localhost:8000/api/products/${productId}`, { method: 'Delete' })
      .then(res => res.json())
      .then(result => {
        setShowDeleteModal(false);
        getAllProduct();

      })
  }
  useEffect(() => {
    getAllProduct()
  }, [])

  return (
    <>
      {
        allproduct.length ? (
          <table className=' w-3/4 bg-white rounded-2xl mt-5'>
            {
              allproduct.map((product) => (
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
                      <button onClick={() => {
                        openDeailmodal();
                        setProductInfo(product)
                      }} className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>جزئیات</button>
                      <button onClick={() => {
                        openDeleteModa();
                        setProductId(product.id)
                      }} className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>حذف</button>
                      <button onClick={() => {
                        openEditemodal();
                        setProductId(product.id);
                        setProductNewTitel(product.title);
                        setProductNewCount(product.count);
                        setProductNewPrice(product.price);
                        setProductNewUrl(product.img);
                        setProductNewColor(product.colors);
                        setProductNewPopularity(product.popularity);
                        setProductNewSale(product.sale)

                      }} className='p-2 m-2 text-white rounded-[0.5rem] bg-blue-custom'>ویرایش</button>
                    </td>
                  </tr>

                </>
              ))}
          </table>
        ) : (
          <Errorbox msg="هیچ محصولی یافت نشد" />
        )
      }

      {showDeleteModal && <Deletemodal close={closeDeletemodale} deleteSubmit={deleteProduct} title={'ایا از حذف اطمینان دارید؟'} />}
      {showDetailModal && <Detailmodal close={closeDetailModal}>
        <h3 className='mb-4 text-black'>جزئیات محصول</h3>
        <table className=' w-full border-2 border-solid border-black'>
          <tr className='text-right border-b-2 border-solid border-black  flex justify-between'>
            <th>نام</th>
            <th>قیمت</th>
            <th>محبوبیت</th>
          </tr>
          <tr className='text-right flex justify-between'>
            <td>{productInfo.title}</td>
            <td>{productInfo.price}</td>
            <td>{productInfo.popularity}</td>
          </tr>
        </table>
      </Detailmodal>}
      {showEditeModal && <Editemodal close={() => { setShowEditeModal(false) }} onSubmit={submitProductEdite}>
      <div className='w-2/3'>

        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <MdDriveFileRenameOutline className='text-2xl' /> <input
            className='w-full  p-1 text-center outline-0 '
            type="text"
            placeholder='نام'
            value={productNewTitel}
            onChange={e => setProductNewTitel(e.target.value)} />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <TbNumber123 className='text-2xl' /> <input
            className='w-full  p-1 text-center outline-0 '
            type="text"
            placeholder='موجودی'
            value={productNewCount}
            onChange={e => setProductNewCount(e.target.value)} />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <FaDollarSign className='text-2xl' /> <input
            className='w-full  p-1 text-center outline-0 '
            type="text"
            placeholder='قبمت'
            value={productNewPrice}
            onChange={e => setProductNewPrice(e.target.value)} />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <FaAirbnb className='text-2xl' /> <input
            className='w-full  p-1 text-center outline-0 '
            type="text"
            placeholder='ادرس عکس'
            value={productNewUrl}
            onChange={e => setProductNewUrl(e.target.value)} />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <IoIosColorPalette className='text-2xl' /> <input
            className='w-full  p-1 text-center outline-0 '
            type="text"
            placeholder='تعداد رنگ بندی'
            value={productNewColor}
            onChange={e => setProductNewColor(e.target.value)} />
        </div>
        <div className=' flex justify-center items-center bg-white-50 rounded-2xl mt-3  '>
          <FaRegGrinStars className='text-2xl' /> <input
            className='w-full  p-1 text-center outline-0 '
            type="text"
            placeholder='حبوبیت(درصد)'
            value={productNewPopularity}
            onChange={e => setProductNewPopularity(e.target.value)} />
        </div>
      </div>
      </Editemodal>}
    </>

  )
}
