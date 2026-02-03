"use client"
import CollectionSection from "@/features/home/collectionSection";
import FaqSection from "@/features/home/faqSection";
import FooterSection from "@/features/home/footerSection";
import HeroSection from "@/features/home/heroSection";
import ProcessSection from "@/features/home/processSection";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText)
import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
 // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
  },[])
 
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
