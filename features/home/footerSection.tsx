import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import FooterImage1 from '../../public/images/footer1.png'
import FooterImage2 from '../../public/images/footer2.png'
import FooterImage3 from '../../public/images/footer3.png'

const FooterSection = () => {
  return (
    <div className="lg:p-14 p-9">
         <p
        className="font-sfProMd lg:text-[36px] text-[30px] uppercase [--letter-spacing:-0.04em]"
        style={{ letterSpacing: "var(--letter-spacing)" }}
      >
        oaken
      </p>
      <p
        className="font-sfProMd mb-4 lg:text-[26px] text-[14px] [--letter-spacing:-0.04em]"
        style={{ letterSpacing: "var(--letter-spacing)" }}
      >
        Solid wood furniture since <span className="font-sfProB">1946</span>
      </p>
       <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-end items-start gap-4">
     
      <ul className="flex flex-col lg:items-end gap-4 mt-4">
        <li className="flex items-center gap-2 font-sfPro lg:text-[26px] text-[14px]">
          <a href="#">Company</a>
          <MdArrowOutward size={12} color="#676767" />
        </li>
        <li className="flex items-center gap-2 font-sfPro lg:text-[26px] text-[14px]">
          <a href="#">About</a>
          <MdArrowOutward size={12} color="#676767" />
        </li>
        <li className="flex items-center gap-2 font-sfPro lg:text-[26px] text-[14px]">
          <a href="#">Support</a>
          <MdArrowOutward size={12} color="#676767" />
        </li>
        <li className="flex items-center gap-2 font-sfPro lg:text-[26px] text-[14px]">
          <a href="#">Care Guide</a>
          <MdArrowOutward size={12} color="#676767" />
        </li>
      </ul>
      <div>
 <p
        className="text-[14px] lg:text-[26px] lg:[--letter-spacing:0.00em] [--letter-spacing:-0.03em] font-sfProMd mt-3"
        style={{ letterSpacing:"var(--letter-spacing)"}}
      >
        hello@oaken.co{" "}
      </p>
      <p
        className="text-[14px] lg:text-[26px] lg:[--letter-spacing:0.00em] [--letter-spacing:-0.03em] font-sfProMd"
        style={{ letterSpacing: "var(--letter-spacing)"}}
      >
        Eindhoven, Netherlands{" "}
      </p>
     
      </div>

     
     
    
    </div>
     <div className="hidden lg:flex gap-15 items-center my-6">
        <Image src={FooterImage1} alt="" className="w-[430px] h-[429px] object-cover"/>
         <Image src={FooterImage2} alt="" className="w-[430px] h-[429px] object-cover"/>
          <Image src={FooterImage3} alt="" className="w-[430px] h-[429px] object-cover"/>

      </div>
     <p className="text-[12px] lg:hidden text-[#8D8D8D] font-sfPro my-6 w-[95%]" style={{letterSpacing:"-0.01em", lineHeight:"20px"}}>
        Oaken designs and produces furniture with a focus on material integrity,
        functional clarity, and long-term use. All products are made using
        natural materials and controlled manufacturing processes developed to
        ensure consistency, durability, and efficiency. Variations in wood
        grain, color, and texture are inherent to solid wood and are considered
        a natural characteristic of each piece rather than a flaw. Dimensions,
        weights, and specifications are provided as a guide and may vary
        slightly due to material behavior and production methods. Product images
        are intended to represent form and finish as accurately as possible,
        though appearance may differ depending on lighting, environment, or
        display settings. Availability, lead times, and pricing are subject to
        change as part of ongoing production and operational planning. Oaken
        reserves the right to refine designs, materials, and processes in
        pursuit of improved performance and quality, while remaining committed
        to the principles established since its founding.
      </p>
      <div className="flex justify-between w-full items-end">
  <ul className="flex flex-col lg:flex-row lg:gap-24 items-start gap-4">
        <li className="underline lg:no-underline font-sfPro text-[14px] lg:text-[26px] [--letter-spacing:-0.03em] lg:[--letter-spacing:0.0em] text-right" style={{letterSpacing: "var(--letter-spacing)"}}><a href="#">Privacy</a></li>
        <li className="underline lg:no-underline font-sfPro text-[14px] lg:text-[26px] [--letter-spacing:-0.03em] lg:[--letter-spacing:0.0em] text-right" style={{letterSpacing: "var(--letter-spacing)"}}><a href="#">Terms</a></li>
      </ul>
      <p className="font-sfProB text-[10px] lg:text-[26px] [--letter-spacing:-0.03em] lg:[--letter-spacing:0.0em]" style={{letterSpacing: "var(--letter-spacing)"}}>© Oaken 2026</p>
      </div>
    </div>
   
  );
};

export default FooterSection;
