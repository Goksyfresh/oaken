import { getProductById } from '@/lib/product'
import { notFound } from 'next/navigation'
import React from 'react'
import ProductDetails from '../page'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
  const product = getProductById(parseInt(id))
  
  if (!product) {
    notFound()
  }

  return <ProductDetails {...product} />
}