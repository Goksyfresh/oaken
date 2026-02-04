import React, { useRef } from "react";
import ProcessImage1 from "../../public/images/process1.png";
import ProcessImage2 from "../../public/images/process2.png";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const ProcessSection = () => {
  const processContainer = useRef<HTMLDivElement>(null)
   const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
   useGSAP(()=>{
      const split = new SplitText('.process-text',{
        type:"lines"
      })
       gsap.set(split.lines,{
            opacity:0.7
          })
      ScrollTrigger.create({
        trigger:processContainer.current,
        start:`${isDesktopOrLaptop? "30% top" :"top 40%"}`,
        end:`+=${600}`,
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
        
    },[isDesktopOrLaptop])
  return (
    <div ref={processContainer} className="lg:p-14 p-9 mt-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 lg:mb-12">
        <p
          className="font-sfProMd text-[24px] uppercase"
          style={{ letterSpacing: "-0.03em" }}
        >
          process
        </p>
        <IoIosArrowRoundForward size={24}/>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block -ml-70">
        <div className="flex items-center gap-45">
          <Image
            src={ProcessImage1}
            alt="process-image"
            className="w-[917px] h-[810px] object-cover"
            width={917}
            height={810}
          />
          <Image
            src={ProcessImage2}
            alt="process-image"
            className="w-[917px] h-[810px] object-cover"
            width={917}
            height={810}
          />
        </div>
        <p className="process-text mt-10 font-sfProMd text-[36px] w-[890px] mx-auto text-center">
          Oaken follows a disciplined process designed for precision and
          efficiency. Each step is carefully controlled to ensure consistent
          quality with minimal waste.
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden -ml-37">
        <div className="flex items-center justify-between">
          <Image
            src={ProcessImage1}
            alt="process-image"
            className="w-[390px] h-[292px] object-cover"
          
          />
          <Image
            src={ProcessImage2}
            alt="process-image"
            className="w-[390px] h-[292px] object-cover"
          
          />
        </div>
        <p 
          className="process-text mt-8 font-sfProMd text-[18px] w-[328px] relative left-1/2 -translate-x-1/2 mx-auto text-center" 
          style={{letterSpacing:"-0.05em"}}
        >
          Oaken follows a disciplined process designed for precision and
          efficiency. Each step is carefully controlled to ensure consistent
          quality with minimal waste.
        </p>
      </div>

      {/* Bottom Text */}
      <p 
        className="mt-16 lg:mt-24 mx-auto text-[#676767] text-[14px] lg:text-[30px] w-[70%] lg:w-[55%] font-sfProMd text-center" 
        style={{letterSpacing: "-0.05em"}}
      >
        Efficiency at Oaken comes from clarity and experience. A refined process
        allows us to produce furniture with precision, consistency, and
        restraint
      </p>
    </div>
  );
};

export default ProcessSection;