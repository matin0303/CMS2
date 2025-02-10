import React from 'react'
import Errorbox from '../Errorbox/Errorbox'
import Addnewproduct from './Addnewproduct/Addnewproduct'
import Producttable from './Producttable/Producttable'
import Detailmodal from '../Detailmodal/Detailmodal'
export default function Products() {
  return (
    <div className='relative w-full flex justify-center flex-col items-center'>
      <Addnewproduct/> 
      <Producttable/>
     
      {/*<Errorbox msg="هیچ محصولی یافت نشد"/>*/}
    </div>
  )
}
