import React from 'react'
import { FaAt } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import Image from 'next/image';
import ImageProd from '../../public/images/helix.png'
import DhlLogo from '../../public/images/dhl.png'
import upsLogo from '../../public/images/ups.png'

const CheckoutPage = () => {
  return (
    <div className='p-14' style={{padding:"80px"}}>
         <p className='lg:text-[30px] font-sfProMd mb-4'>Checkout</p>
        <p className='hidden lg:block font-sfProMd lg:text-[18px]'>Complete your purchase item by providing your payment details</p>
        <div className='flex lg:flex-row flex-col items-start justify-between'>
<div className='flex w-[542px] flex-col gap-4'>
    <div className='mt-4'>
        <label className='font-sfProMd text-[14px] [--letter-spacing:-0.02em] lg:[--letter-spacing:0.00em] lg:text-[16px] text-[#2e2e2e]' style={{letterSpacing:'var(--letter-spacing)'}}>Email Address</label><br/>
        <div className='relative'>
            <span style={{position:'absolute', top:"50%", left:"20px", transform:'translateY("-50%")'}}><FaAt color="#cccccc" /></span>
 <input type="email" placeholder='kawthargbemisola@yahoo.com' className='p-2 mt-2 pl-8 w-[338px] lg:w-[542px]' style={{border:'1px solid #cccccc', borderRadius:'0.8px', padding:'10px 10px 10px 50px', marginTop:"8px"}}/>
        </div>
       
    </div>
     <div className='mt-4'>
        <label className='font-sfProMd lg:text-[16px] text-[#2e2e2e]'>Card Details</label><br/>
        <div className='relative flex flex-col lg:flex-row'>
            <span style={{position:'absolute', top:"50%", left:"20px", transform:'translateY("-50%")'}}><CiCreditCard1 color="#cccccc" /></span>
 <input type="number" placeholder='Card Number' className='p-2 mt-2 pl-10 w-[338px] lg:w-[542px]' style={{border:'1px solid #cccccc', borderRadius:'0.8px', padding:'10px 10px 10px 50px', marginTop:"8px"}}/>
  <input type="email" placeholder='CVV' className='p-2 mt-2 pl-10 w-[338px] lg:w-[542px]' style={{border:'1px solid #cccccc', borderRadius:'0.8px', padding:'10px 10px 10px 50px', marginTop:"8px"}}/>
        </div>
       
    </div>
     <div className='mt-4'>
        <label className='font-sfProMd lg:text-[16px] text-[#2e2e2e]'>Name on card</label><br/>
        <div className='relative'>
            <span style={{position:'absolute', top:"50%", left:"20px", transform:'translateY("-50%")'}}><IoPerson color="#cccccc" /></span>
 <input type="email" placeholder='Enter your name' className='p-2 mt-2 pl-10 w-[338px] lg:w-[542px]' style={{border:'1px solid #cccccc',borderRadius:'0.8px', padding:'10px 10px 10px 50px', marginTop:"8px"}}/>
        </div>
       
    </div>
     <div className='mt-4'>
        <label className='font-sfProMd lg:text-[16px] text-[#2e2e2e]'>Billing Address</label><br/>
        <div className='relative flex flex-col'>
            <span style={{position:'absolute', top:"50%", left:"20px", transform:'translateY("-50%")'}}><FaAt color="#cccccc" /></span>
 <input type="email" placeholder='501 Shelby Drive, Jake Avenue' className='p-2 mt-2 pl-10 w-[338px] lg:w-[542px]' style={{border:'1px solid #cccccc', borderRadius:'0.8px', padding:'10px 10px 10px 50px', marginTop:"8px"}}/>
 <div className='-mt-6'>
    <input type="email" placeholder='501 Shelby Drive, Jake Avenue' className='p-2 mt-2 pl-10' style={{border:'1px solid #cccccc', width:"271px", borderRadius:'0.8px', padding:'10px 10px 10px 50px', marginTop:"8px"}}/>
    <input type="email" placeholder='501 Shelby Drive, Jake Avenue' className='p-2 mt-2 pl-10' style={{border:'1px solid #cccccc', width:"271px", borderRadius:'0.8px', padding:'10px 10px 10px 50px', marginTop:"8px"}}/>
 </div>
        </div>
       
      
    </div>
     <div className='w-[70%]'>
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-[#676767]' style={{letterSpacing:"0.03em"}}>Subtotal</p>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-black' style={{letterSpacing:"0.03em"}}>1689</p>
          </div>
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-[#676767]' style={{letterSpacing:"0.03em"}}>Tax & Custom</p>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-black' style={{letterSpacing:"0.03em"}}>$168.90</p>
          </div>
          
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProB text-[16px] lg:text-[16px] text-[#676767]' style={{letterSpacing:"0.03em"}}>Total</p>
            <p className='font-sfProB text-[16px] lg:text-[15px] text-black' style={{letterSpacing:"0.03em"}}>$1857.90</p>
          </div>
<p className='font-sfProMd text-[16px] text-[#676767] my-6' style={{letterSpacing:"0.03em"}}>Shipping cost and Tax & Custom fee will be calculated and included at the checkout section</p>
          <button className='w-full bg-black rounded-2xl text-white font-sfProB text-[16px] lg:text-[16px] py-3 hover:bg-gray-800 transition-colors' style={{letterSpacing:"0.03em"}}>
            Go to Checkout
          </button>
        </div>
     
    

</div>
<div>
    <p>Order Summary</p>
    <p>Please ensure that your order is correct for better shopping experience</p>
    <div style={{border:"1px solid #cccccc", padding:"30px", borderRadius:"10px"}}>
    <div className='flex items-center justify-between my-4'>
        <div className='flex items-center gap-8'>
<Image src={ImageProd} width={60} height={60} alt=''/>
        <div className='flex flex-col items-start gap-2'>
 <p className='font-sfProMd text-[16px]'>Oaken Wooden Chair</p>
        <p className='font-sfProMd text-[16px]'>Qty.1</p>
        </div>
        </div>
        
       <p className='font-sfProMd text-[16px]'>$1698.00</p>
    </div>
        <div className='flex items-center justify-between my-4'>
        <div className='flex items-center gap-8'>
<Image src={ImageProd} width={60} height={60} alt=''/>
        <div className='flex flex-col items-start gap-2'>
 <p className='font-sfProMd text-[16px]'>Oaken Wooden Chair</p>
        <p className='font-sfProMd text-[16px]'>Qty.1</p>
        </div>
        </div>
        
       <p className='font-sfProMd text-[16px]'>$1698.00</p>
    </div>
        <div className='flex items-center justify-between my-4'>
        <div className='flex items-center gap-8'>
<Image src={ImageProd} width={60} height={60} alt=''/>
        <div className='flex flex-col items-start gap-2'>
 <p className='font-sfProMd text-[16px]'>Oaken Wooden Chair</p>
        <p className='font-sfProMd text-[16px]'>Qty.1</p>
        </div>
        </div>
        
       <p className='font-sfProMd text-[16px]'>$1698.00</p>
    </div>
   
</div>
 <p className='mt-12'>Available Shipping Method</p>
     <div style={{border:"1px solid #cccccc", padding:"30px", borderRadius:"10px", marginTop:"30px"}}>
        <div className='flex items-center justify-between my-4'>
<Image src={DhlLogo} width={51} height={36} alt=''/>
<div className='flex flex-col items-start gap-2'>
<p>DHL Express Delivery</p>
<p>Delivery takes 2-3 weeks after purchase</p>
</div>
<div className='flex gap-2 items-center'>
<p className='font-sfProMd text-[16px] text-black'>$29.90</p>
<input type="radio" name="shipping" />
</div>
       </div>
      </div>
         <div style={{border:"1px solid #cccccc", padding:"30px", borderRadius:"10px", marginTop:"30px"}}>
        <div className='flex items-center justify-between my-4'>
<Image src={upsLogo} width={51} height={36} alt=''/>
<div className='flex flex-col items-start gap-2'>
<p>DHL Express Delivery</p>
<p>Delivery takes 2-3 weeks after purchase</p>
</div>
<div className='flex gap-2 items-center'>
<p className='font-sfProMd text-[16px] text-black'>$29.90</p>
<input type="radio" name="shipping" />
</div>
       </div>
      </div>
<div></div>
        </div>
      
       </div>
    
    </div>
  )
}

export default CheckoutPage
