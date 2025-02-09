import React from 'react'
import Errorbox from '../Errorbox/Errorbox'
import Addnewproduct from './Addnewproduct/Addnewproduct'
import Producttable from './Producttable/Producttable'
export default function Products() {
  return (
    <div className='w-full flex justify-center flex-col items-center'>
      <Addnewproduct/> 
      <Producttable/>
      {/*<Errorbox msg="هیچ محصولی یافت نشد"/>*/}
    </div>
  )
}
