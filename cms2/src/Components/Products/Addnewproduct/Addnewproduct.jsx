import React from 'react'
import { useState } from 'react';

export default function Addnewproduct() {
  const [newProductTitel,setNewProductTitel] = useState('');
  const [newProductCount,setNewProductCount] = useState('');
  const [newProductPrice,setNewProductPrice] = useState('');
  const [newProductUrl,setNewProductUrl] = useState('');
  const [newProductNewColor,setNewProductColor] = useState('');
  const [newProductPopularity,setNewProductPopularity] = useState('');
  const [newProductSale,setNewProductSale] = useState('2');

  const newProductInfoww={
    title:newProductTitel,
    price:newProductPrice,
    count:newProductCount,
    img:newProductUrl,
    popularity:newProductPopularity,
    sale:newProductSale,
    colors:newProductNewColor,
  }

  function AddNewProduct(event){
    // fetch(`http://localhost:8000/api/products`,{
    //   method:'POST',
    //   headers :{
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify(newProductInfoww)
    // }).then(res=>(res.json()))
    // .then(result=>console.log(result))
    event.preventDefault();
  }
    
  return (
    <div className='self-center w-3/4'>
      <h1 className='text-[1.5rem]'>افزودن محصول جدید</h1>
      <form className=' h-100 p-4 self-center bg-white rounded-2xl flex flex-wrap ' action="#">
        <div className='w-1/2  flex justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' 
            type="text" 
            placeholder='نام محصول را وارد کنید' 
            value={newProductTitel}
            onChange={e=>setNewProductTitel(e.target.value)} />
        </div>
        <div className='w-1/2 flex justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' 
            type="text" 
            placeholder='موجودی محصول را وارد کنید' 
            value={newProductCount}
            onChange={e=>setNewProductCount(e.target.value)}/>
        </div>
        <div className='w-1/2 flex  justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' 
            type="text" 
            placeholder='قیمت محصول را وارد کنید' 
            value={newProductPrice}
            onChange={e=>setNewProductPrice(e.target.value)}/>
        </div>
        <div className='w-1/2  flex justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' 
            type="text" 
            placeholder='ادرس عکس محصول را وارد کنید' 
            value={newProductUrl}
            onChange={e=>setNewProductUrl(e.target.value)}/>
        </div>
        <div className='w-1/2 flex  justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' 
            type="text" 
            placeholder='تعداد رنگ بندی محصول را وارد کنید' 
            value={newProductNewColor} 
            onChange={e=>setNewProductColor(e.target.value)}/>
        </div>
        <div className='w-1/2 flex justify-center items-center max-lg:w-full'>
            <input className='bg-white-50 w-3/4 h-8 p-2 outline-0 rounded-[0.5rem]' 
            type="text" 
            placeholder='میزان محبوبیت محصول را وارد کنید' 
            value={newProductPopularity}
            onChange={e=>setNewProductPopularity(e.target.value)}/>
        </div>
        <div className='w-full flex justify-center items-center '>
          <button onClick={AddNewProduct} className='bg-blue-custom text-white cursor-pointer shadow-md shadow-gray-700 w-3/4 h-10 rounded-3xl'>ثبت محصول</button>
        </div>
      </form>
    </div>
  )
}
