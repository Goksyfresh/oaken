import Image, { StaticImageData } from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import React from 'react'
import Link from 'next/link';

type PropsType = {
    img: StaticImageData,
    title: string,
    price: number;
    id: number;
}

const ProductCard = ({ img, title, price, id }: PropsType) => {
  return (
    <Link href={`/products/${id}`} className='flex flex-col items-start gap-2 group'>
      {/* Image container with overflow hidden */}
      <div className='overflow-hidden lg:w-[411px] lg:h-[429px] w-[339px] h-[354px]'>
        <Image 
          src={img} 
          alt={title} 
          className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
        />
      </div>
      
      <p className='font-sfProMd text-[18px] lg:text-[30px] lg:[--letter-spacing:-0.00em] [--letter-spacing:-0.04em]' style={{ letterSpacing: "var(--letter-spacing)" }}>
        {title}
      </p>
      
      <div className='flex items-center justify-between w-full'>
        <p className='text-[#676767] text-[16px] [--letter-spacing:-0.04em] lg:[--letter-spacing:-0.00em] lg:text-[24px] font-sfPro' style={{ letterSpacing: "var(--letter-spacing)" }}>
          ${price}
        </p>
        <MdArrowOutward 
          size={20} 
          className='hidden lg:block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' 
        />
      </div>
    </Link>
  )
}

export default ProductCard