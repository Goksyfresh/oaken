import React from 'react'
import { StaticImageData } from 'next/image'
import ProductCard from './productCard'

 export type Product = {
  id: number
  image: StaticImageData
  name: string
  description: string
  price: number
  colors: string[]
  materials: string[]
  dimension: string[]
}

const ProductGrid = ({products}: {products: Product[]}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12 lg:gap-y-20'>
      {products.map(p=>(
        <ProductCard key={p.id} img={p.image} id={p.id} title={p.name} price={p.price}/>
      ))}
    </div>
  )
}

export default ProductGrid
