import CollectionSection from "@/features/home/collectionSection";
import FaqSection from "@/features/home/faqSection";
import FooterSection from "@/features/home/footerSection";
import HeroSection from "@/features/home/heroSection";
import ProcessSection from "@/features/home/processSection";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <CollectionSection/>
   <ProcessSection/>
   <FaqSection/>
   <FooterSection/>
   </>
  );
}
