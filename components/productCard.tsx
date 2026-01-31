import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";
import React from 'react'
type PropsType = {
    img:string,
    title:string,
    price:number;
}
const ProductCard = ({img, title, price}:PropsType) => {
  return (
    <div className='flex flex-col items-start gap-2'>
      <Image src={img} alt={title} className='lg:w-[411px] lg:h-[429px] w-[339px] h-[354px] object-cover'/>
      <p className='font-sfProMd text-[18px] lg:text-[30px] lg:[--letter-spacing:-0.00em] [--letter-spacing:-0.04em]' style={{letterSpacing:"var(--letter-spacing)"}}>{title}</p>
      <div className='flex items-center justify-between w-full'>
      <p className='text-[#676767] text-[16px] [--letter-spacing:-0.04em] lg:[--letter-spacing:-0.00em] lg:text-[24px] font-sfPro' style={{letterSpacing:"var(--letter-spacing)"}}>${price}</p>
      <MdArrowOutward size={20} className='hidden lg:block'/>
      </div>

    </div>
  )
}

export default ProductCard
