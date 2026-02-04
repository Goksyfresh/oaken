import Link from 'next/link'
import React from 'react'
import { IoClose } from "react-icons/io5";

const HamburgerMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='fixed top-0 left-0 w-screen h-[375px] bg-white z-50 flex items-center justify-center'>
      {/* Close button */}
      <button 
        onClick={onClose}
        className='absolute top-9 right-9 text-2xl font-sfProB'
      >
      <IoClose size={26}/>
      </button>
      
      <ul className='flex flex-col gap-4 items-center font-sfProB uppercase text-[22px]' style={{letterSpacing:"-0.03em"}}>
        <li><a href="#">about</a></li>
        <li><a href="#">collection</a></li>
        <Link href='/cart'>cart</Link>
        <li><a href="#">contact</a></li>
      </ul>
    </div>
  )
}

export default HamburgerMenu