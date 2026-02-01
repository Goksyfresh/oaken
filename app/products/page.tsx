"use client";
import type { Product } from '@/components/productGrid'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosArrowRoundBack } from "react-icons/io";

const ProductDetails = (product: Product) => {
    const [selectedColor, setSelectedColor] = React.useState<string>(
  product.colors?.[0] ?? ''
);

  
  return (
    <div className='lg:p-14 p-6 relative'>
      {/* Back Button */}
      <Link href="/">
        <IoIosArrowRoundBack size={50} className='absolute top-6 right-6 lg:top-10 lg:right-10 cursor-pointer hover:opacity-70 transition-opacity'/>
      </Link>

      {/* Main Product Section */}
      <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-10 lg:justify-between items-start lg:items-center mt-10 lg:mt-0'>
        {/* Product Image */}
        <div className='w-full lg:w-auto'>
          <Image 
            src={product.image} 
            alt={product.name} 
            className='w-full lg:w-[674px] h-auto lg:h-[703px] object-cover'
            width={674}
            height={703}
          />
        </div>
        
        {/* Product Info */}
        <div className='flex flex-col items-start gap-4 lg:gap-6 w-full lg:w-auto'>
          <h1 className='font-sfProMd text-[32px] lg:text-[64px] leading-tight text-black max-w-full lg:w-[491px]' style={{letterSpacing: '-0.01em'}}>
            {product.name}
          </h1>
          <p className='font-sfPro text-[24px] lg:text-[36px] text-black' style={{letterSpacing: '-0.01em'}}>
            ${product.price}
          </p>
          
          {/* Desktop Color Selector */}
          <div className='hidden lg:block mt-4'>
            <p className='uppercase font-sfPro text-[#676767] text-[18px] lg:text-[24px] mb-4'>
              colour: {selectedColor}
            </p>
            {product.colors.length > 1 && (
              <div className='flex items-center gap-4'>
                {product.colors.map((color, index) => (
                  <div 
                    key={index} 
                    className='cursor-pointer transition-all duration-200'
                    onClick={() => setSelectedColor(color)}
                  >
                    <div 
                      className='w-[50px] h-[50px] rounded-full'
                      style={{
                        backgroundColor: color,
                        border: selectedColor === color ? `3px solid ${color}` : '3px solid transparent',
                        padding: selectedColor === color ? '6px' : '0px',
                        boxShadow: selectedColor === color ? `0 0 0 2px white, 0 0 0 5px ${color}` : 'none'
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Color Selector */}
      <div className='lg:hidden mt-6 flex flex-col items-start gap-3'>
        <p className='uppercase font-sfPro text-[#676767] text-[14px]' style={{letterSpacing: '-0.02em'}}>
          colour: {selectedColor}
        </p>
        {product.colors.length > 1 && (
          <div className='flex items-center gap-3'>
            {product.colors.map((color, index) => (
              <div 
                key={index} 
                className='cursor-pointer transition-all duration-200'
                onClick={() => setSelectedColor(color)}
              >
                <div 
                  className='w-[30px] h-[30px] rounded-full'
                  style={{
                    backgroundColor: color,
                    border: selectedColor === color ? `2px solid ${color}` : '2px solid transparent',
                    padding: selectedColor === color ? '4px' : '0px',
                    boxShadow: selectedColor === color ? `0 0 0 2px white, 0 0 0 4px ${color}` : 'none'
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
   <Link href="/cart" className='lg:hidden flex items-center gap-2 group mt-6 lg:mt-0'>
          <span className="text-black font-sfPro lg:font-sfProB text-[14px] lg:text-[24px] underline uppercase group-hover:opacity-70 transition-opacity">
            add to cart
          </span>
          <IoIosArrowRoundForward size={30} className='group-hover:translate-x-1 transition-transform'/>
        </Link>
      {/* Description */}
      <div className='mt-10 lg:mt-16 w-full lg:w-[50%]'>
        <p className='font-sfPro text-[14px] lg:text-[24px] text-[#676767] leading-relaxed' style={{letterSpacing: '-0.01em'}}>
          {product.description}
        </p>
      </div>

      {/* Materials, Dimensions & Add to Cart */}
      <div className='flex flex-col lg:flex-row items-start lg:items-end justify-between w-full mt-12 lg:mt-20 gap-10 lg:gap-0'>
        {/* Materials & Dimensions */}
        <div className='flex flex-col sm:flex-row gap-8 lg:gap-20 w-full lg:w-auto'>
          {/* Materials */}
          <div>
            <p className='font-sfProB text-[#676767] mb-3 uppercase text-[12px] lg:text-[20px]' style={{letterSpacing: '-0.02em'}}>
              Materials
            </p>
            {product.materials.map((material, index) => (
              <p key={index} className='font-sfProB text-[14px] lg:text-[24px] text-black mb-2' style={{letterSpacing: '-0.01em'}}>
                {material}
              </p> 
            ))}
          </div>
          
          {/* Dimensions */}
          <div>
            <p className='font-sfProB text-[#676767] mb-3 uppercase text-[12px] lg:text-[20px]' style={{letterSpacing: '-0.02em'}}>
              Dimensions
            </p>
            {product.dimension.map((dimension, index) => (
              <p key={index} className='font-sfProB text-[14px] lg:text-[24px] text-black mb-2' style={{letterSpacing: '-0.01em'}}>
                {dimension}
              </p> 
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Link href="/cart" className='hidden lg:flex items-center gap-2 group mt-6 lg:mt-0'>
          <span className="text-black font-sfProB text-[14px] lg:text-[24px] underline uppercase group-hover:opacity-70 transition-opacity">
            add to cart
          </span>
          <IoIosArrowRoundForward size={30} className='group-hover:translate-x-1 transition-transform'/>
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails