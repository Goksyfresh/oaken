import FaqReusable from "@/components/faqReusable";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
const FaqSection = () => {
  return (
    <div className="relative mt-20 lg:p-14 p-9">
      <div className="flex items-center justify-between lg:mb-10 w-full">
        <p
          className="uppercase hidden lg:block font-sfProMd text-[24px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          frequently asked questions
        </p>
        <p
          className="font-sfProMd lg:hidden text-[14px]"
          style={{ letterSpacing: "-0.03em" }}
        >
          FAQs
        </p>
        <IoIosArrowRoundForward size={30} />
      </div>
      <div className="bg-[#cccccc] h-[1px] w-[full] my-4" />
      <FaqReusable
        text="HOW DO YOU MAINTAIN QUALITY ACROSS ALL PRODUCTS?"
        description="Quality at Oaken is maintained through a controlled production process, careful material selection, and consistent standards applied at every stage of manufacturing. Each piece is designed with clarity and produced using repeatable methods that prioritize durability, precision, and long-term use."
      />
      <FaqReusable
        text="WHAT ARE OAKEN PRODUCTS MAKE OF?"
        description="Yes, we offer international shipping to select countries. Shipping fees and delivery times vary based on the destination. Please check our shipping policy for more details."
      />
      <FaqReusable
        text="WHAT MATERIALS DO YOU USE?"
        description="Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number on our website or the carrier's site to monitor your shipment."
      />
      <FaqReusable
        text="DO YOU OFFER CUSTOM OR MADE-TO-ORDER PIECES?"
        description="Yes, we offer discounts for bulk purchases. Please contact our sales team with your requirements, and they will provide you with a customized quote."
      />
    </div>
  );
};

export default FaqSection;
