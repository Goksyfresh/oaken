import React from "react";
import ProcessImage1 from "../../public/images/process1.png";
import ProcessImage2 from "../../public/images/process2.png";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const ProcessSection = () => {
  return (
    <div className="lg:p-14 p-9 mt-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 lg:mb-12">
        <p
          className="font-sfProMd text-[24px] uppercase"
          style={{ letterSpacing: "-0.03em" }}
        >
          process
        </p>
        <MdArrowForward size={24}/>
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
        <p className="mt-10 font-sfProMd text-[36px] w-[890px] mx-auto text-center">
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
          className="mt-8 font-sfProMd text-[18px] w-[328px] relative left-1/2 -translate-x-1/2 mx-auto text-center" 
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