import React from 'react'
import Dropdown from "../../public/images/dropdown.png"
import HeroImage1 from '../../public/images/hero1.png'
import HeroImage2 from '../../public/images/hero2.png'
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='lg:p-14 p-9 overflow-clip'>
      <nav className='flex items-center lg:items-start justify-between'>
        <h1 className='font-sfProMd text-[36px] lg:text-[128px] leading-none lg:-mt-3 uppercase' style={{letterSpacing:'-0.04em'}}>oaken</h1>
        <ul className='hidden lg:flex items-center gap-4'>
            <li className='text-[18px] text-black uppercase underline font-sfProB'><a href="#">cart</a></li>
              <li className='text-[18px] text-black uppercase underline font-sfProB'><a href="#">search</a></li>
              <div className='flex items-center gap-1'>
                 <li className='text-[18px] text-black uppercase font-sfProB leading-none -mt-1/2'>US</li>
                 <Image src={Dropdown} alt='dropdown' className='h-[7px] w-[9px] mt-1'/>
              </div>
             
        </ul>
        <div className='lg:hidden flex gap-3 flex-col items-end'>
   <div className='h-[5px] w-[35px] bg-black rounded-full'/>
    <div className='h-[5px] w-[50px] bg-black rounded-full'/>
        </div>
   
      </nav>
      <div className='flex flex-col lg:flex-row items-start gap-6 lg:justify-between mt-15 lg:mt-30'>
        <div>
            <ul className='lg:flex hidden flex-col text-black text-[20px] font-sfProMd gap-6'>
                <li><a href="#">About</a></li>
                <li><a href="#">Collection</a></li>
                <li><a href="#">Process</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
            <p className='lg:hidden font-sfPro text-[14px]' style={{letterSpacing:'-0.03em'}}>Oaken designs and crafts furniture from solid wood, guided by function, precision, and a commitment to longevity</p>
        </div>
        <div className='flex gap-4 lg:gap-8'>
            <Image src={HeroImage1} alt='hero-image' className='lg:w-[398px] w-[341px] h-[335px] lg:h-[442px] object-cover'/>
             <Image src={HeroImage2} alt='hero-image' className='lg:w-[398px] w-[341px] h-[335px] lg:h-[442px] object-cover'/>
        </div>
      </div>
      <div className='flex items-center justify-between mt-10 lg:mt-25'>
        <div className='flex flex-col gap-2 lg:gap-3'>
            <p className=' text-[14px] lg:text-[20px] font-sfPro' style={{letterSpacing:"-0.03em"}}>Furniture Company</p>
            <div className='flex items-center gap-1'>
                     <p className=' text-[14px] lg:text-[20px] font-sfProB' style={{letterSpacing:"-0.03em"}}>Est. 1946</p>
<MdArrowOutward size={16}/>
            </div>
     
        </div>
        <div className='hidden lg:block'>
            <p className=' text-[20px] w-[580px] font-sfProMd text-end'>Oaken designs and crafts furniture from solid wood, guided by function, precision, and a commitment to longevity</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-15 lg:mt-35'>
        <p className='uppercase text-[14px] lg:text-[24px] font-sfProMd' style={{letterSpacing:'-0.03em'}}>about</p>
        <p className='text-[18px] lg:text-[42px] font-sfProMd lg:[--letter-spacing:-0.01em] [--letter-spacing:-0.05em]' style={{letterSpacing:"var(--letter-spacing)"}}>Oaken designs solid wood furniture defined by restraint, precision, and lasting quality. Established in 1946, the company continues to work with disciplined processes and material honesty to create pieces made to endure.</p>
      </div>
    </div>
  )
}

export default HeroSection
