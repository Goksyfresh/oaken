"use client";
import React, { useRef, useState } from 'react'
import Dropdown from "../../public/images/dropdown.png"
import HeroImage1 from '../../public/images/hero1.png'
import HeroImage2 from '../../public/images/hero2.png'
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image'
import HamburgerMenu from '@/components/hamburgerMenu';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { types } from 'util';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const HeroSection = () => {
  const[modalOpen, setModalOpen]=useState<boolean>(false);
  const aboutContainer = useRef<HTMLDivElement>(null)
  const heroContainer = useRef<HTMLDivElement>(null)
   const imageContainer = useRef<HTMLDivElement>(null)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const handleModalOpen=()=>{
    setModalOpen(true);
  }
  const handleModalClose=()=>{
    setModalOpen(false);
  }
  useGSAP(()=>{
    const split = new SplitText('.about-text',{
      type:"lines"
    })
     gsap.set(split.lines,{
          opacity:0.7
        })
        
    ScrollTrigger.create({
      trigger:aboutContainer.current,
      start:"top 50%",
      end:`+=${300}`,
      scrub:1,
      onUpdate:(self)=>{
        const progress = self.progress
        const totalLines = split.lines.length;
       
      split.lines.forEach((line, index) => {
        // each line gets its own reveal window
        const lineProgress = gsap.utils.clamp(
          0,
          1,
          progress * totalLines - index
        );

        gsap.to(line, {
          opacity: gsap.utils.interpolate(0.2, 1, lineProgress),
          duration: 0.2,
          overwrite: true,
        });
      });
    }
      })
      
  },[])
  useGSAP(()=>{
    if(!isTabletOrMobile) return;
    if(isTabletOrMobile){
  ScrollTrigger.create({
      trigger:heroContainer.current,
      start:"top top",
      end:`${250}px`,
      pin:true,
      scrub:1,
      onUpdate:(self)=>{
        const progress = self.progress
        gsap.to(imageContainer.current,{
          x: -(progress * 250)
        })
      }
    })
    }
  
  },[isTabletOrMobile])
  return (
    <div ref={heroContainer} className='lg:p-14 p-9 overflow-clip'>
      <nav className='flex items-center lg:items-start justify-between'>
        <h1 className='font-sfProMd text-[36px] lg:text-[128px] leading-none lg:-mt-3 uppercase' style={{letterSpacing:'-0.04em'}}>oaken</h1>
        <ul className='hidden lg:flex items-center gap-4'>
            <Link href='/cart' className='text-[18px] text-black uppercase underline font-sfProB'>cart</Link>
              <li className='text-[18px] text-black uppercase underline font-sfProB'><a href="#">search</a></li>
              <div className='flex items-center gap-1'>
                 <li className='text-[18px] text-black uppercase font-sfProB leading-none -mt-1/2'>US</li>
                 <Image src={Dropdown} alt='dropdown' className='h-[7px] w-[9px] mt-1'/>
              </div>
             
        </ul>
       {/* Animated Hamburger */}
        <button
          onClick={handleModalOpen}
          className='lg:hidden flex flex-col gap-3 items-end relative w-[50px] h-[32px] justify-center'
          aria-label="Open menu"
        >
          <div
            className={`h-[3px] bg-black rounded-full transition-all duration-300 ease-out ${
              modalOpen ? 'w-[50px] rotate-45 translate-y-[6px]' : 'w-[35px]'
            }`}
          />
          <div
            className={`h-[3px] bg-black rounded-full transition-all duration-300 ease-out ${
              modalOpen ? 'w-[50px] -rotate-45 -translate-y-[6px]' : 'w-[50px]'
            }`}
          />
        </button>
   
      </nav>
        {modalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden animate-fadeIn"
            onClick={handleModalClose}
          />
          {/* Modal */}
          <div className="fixed inset-0 z-50 lg:hidden animate-slideInRight">
            <HamburgerMenu onClose={handleModalClose} />
          </div>
        </>
      )}
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
        <div ref={imageContainer} className='flex gap-4 lg:gap-8'>
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
      <div ref={aboutContainer} className='flex flex-col gap-2 mt-15 lg:mt-35'>
        <p className='uppercase text-[14px] lg:text-[24px] font-sfProMd' style={{letterSpacing:'-0.03em'}}>about</p>
        <p className='about-text text-[18px] lg:text-[42px] font-sfProMd lg:[--letter-spacing:-0.01em] [--letter-spacing:-0.05em]' style={{letterSpacing:"var(--letter-spacing)"}}>Oaken designs solid wood furniture defined by restraint, precision, and lasting quality. Established in 1946, the company continues to work with disciplined processes and material honesty to create pieces made to endure.</p>
      </div>
    </div>
  )
}

export default HeroSection
