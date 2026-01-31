import React from 'react'
import ProductCard from './productCard'


const ProductGrid = ({products}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-4 lg:gap-y-20'>
      {products.map(p=>(
        <ProductCard key={p.id} img={p.image} title={p.name} price={p.price}/>
      ))}
    </div>
  )
}

export default ProductGrid
