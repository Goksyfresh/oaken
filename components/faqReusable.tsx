import React from 'react'
import { FaPlus } from "react-icons/fa6";
type faq = {
    text:string,
    description:string
}

const FaqReusable = ({text,description}:faq) => {
  return (
    <div>
        <div className='flex items-center justify-between w-full mb-4'>
<p className='font-sfProMd text-[14px] lg:text-[36px] [--letter-spacing:-0.04em] lg:[--letter-spacing:0.02em] uppercase' style={{letterSpacing:"var(--letter-spacing)"}}>{text}</p>
<FaPlus size={14}/>
        </div>
      <div className='lg:flex items-end justify-end'>
  <p className='font-sfPro [--letter-spacing:-0.02em] hidden lg:[--letter-spacing:0.0em] text-[14px] lg:text-[30px] text-[#676767] lg:text-justify lg:w-[55%] lg:my-6' style={{letterSpacing:"var(--letter-spacing)"}}>{description}</p>
      </div>
    
        <div className='bg-[#cccccc] h-[1px] w-[full] my-4' />
    </div>
  )
}

export default FaqReusable
