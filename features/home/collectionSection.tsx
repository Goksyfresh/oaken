import ProductGrid from '@/components/productGrid'
import { getProducts } from '@/lib/product'
import { IoIosArrowRoundForward } from "react-icons/io";
import React from 'react'

const CollectionSection = () => {
    const products = getProducts()
  return (
    <div className='mt-10 lg:mt-20 lg:p-14 p-9'>
      <div className='w-full flex items-center mb-10 justify-between'>
<p className='uppercase font-sfProMd text-[14px] lg:text-[24px]' style={{letterSpacing:"-0.03em"}}>collection</p>
<IoIosArrowRoundForward size={30}/>
      </div>

      <ProductGrid products={products}/>
    </div>
  )
}

export default CollectionSection
