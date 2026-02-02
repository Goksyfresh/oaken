// app/cart/page.tsx
'use client'
import React from 'react'

import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useCart } from '@/context/cartContext'
import CartItems from '@/components/cartItems'


export default function CartPage() {
  const { cartItems, getTotalItems, getTotalPrice } = useCart()
  
  const subtotal = getTotalPrice()
  const shipping = cartItems.length > 0 ? 50 : 0
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className='lg:p-14 p-6 min-h-screen flex flex-col items-center justify-center'>
        <h1 className='font-sfProMd text-[24px] lg:text-[36px] mb-4'>Your cart is empty</h1>
        <Link href="/" className='flex items-center gap-2 group mt-4'>
          <span className='font-sfProB text-[14px] lg:text-[18px] underline uppercase group-hover:opacity-70 transition-opacity'>
            Continue Shopping
          </span>
          <IoIosArrowRoundForward size={24} className='group-hover:translate-x-1 transition-transform'/>
        </Link>
      </div>
    )
  }

  return (
    <div className='flex flex-col lg:flex-row items-center justify-between lg:p-14 p-4'>
    <div className='w-full p-4 lg:p-0 '>
      {/* Header */}
      <div className='lg:mb-8 mb-4'>
        <h1 className='font-sfProMd text-[24px] lg:text-[30px] mb-2 [--letter-spacing:0.03em] lg:[--letter-spacing:0.0em]' style={{letterSpacing:"var(--letter-spacing)"}}>Cart</h1>
        <p className='font-sfPro text-[14px] lg:text-[24px] text-black' style={{letterSpacing:"0.03em"}}>
          Your cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
        </p>
      </div>

      {/* Table Header */}
      <div className="bg-[#cccccc] hidden lg:block h-[1px] w-full mt-4 mb-6" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="pb-4 hidden lg:block text-xs text-black mb-4">
  <div className='font-sfProMd text-[18px] hidden lg:block' style={{letterSpacing:"-0.01em"}}>Item</div>
  <div  className='font-sfProMd text-[18px] hidden lg:block' style={{letterSpacing:"-0.01em"}}>Unit Price</div>
  <div  className='font-sfProMd text-[18px] hidden lg:block' style={{letterSpacing:"-0.01em"}}>Quantity</div>
  <div  className='font-sfProMd text-[18px] hidden lg:block' style={{letterSpacing:"-0.01em"}}>Total Price</div>
</div>

      {/* Cart Items */}
      <div className='flex flex-col'>
        {cartItems.map(item => (
          <CartItems 
            key={`${item.id}-${item.selectedColor}`}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.price * item.quantity}
          />
        ))}
      </div>

     
    </div>
     {/* Cart Summary */}
     
      <div className='hidden lg:flex flex-col' style={{padding:"80px"}}>
       <p className='font-sfProMd text-[18px]' style={{letterSpacing:"-0.03em"}}>Promo Code</p>
       <input type="text" className='p-2 my-6 ' style={{border:'1px solid #ccc', padding:'16px'}} placeholder='Enter Promo Code' />

        <div className='w-full lg:w-auto lg:min-w-[300px]'>
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-[#676767]'>Subtotal</p>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-black'>${subtotal}</p>
          </div>
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-[#676767]'>Tax & Custom</p>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-black'>${shipping}</p>
          </div>
          
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProB text-[16px] lg:text-[16px] text-[#676767]'>Total</p>
            <p className='font-sfProB text-[16px] lg:text-[15px] text-black'>${total}</p>
          </div>
<p className='font-sfProMd text-[16px] text-[#676767] my-6' style={{letterSpacing:"-0.01em"}}>Shipping cost and Tax & Custom fee will be calculated and included at the checkout section</p>
          <button className='w-full bg-black rounded-2xl text-white font-sfProB text-[16px] lg:text-[16px] py-3 hover:bg-gray-800 transition-colors'>
            Go to Checkout
          </button>
        </div>
      </div>
         <div className='flex lg:hidden flex-col' style={{padding:"20px"}}>
       <p className='font-sfPro text-[18px]' style={{letterSpacing:"0.03em"}}>Promo Code</p>
       <input type="text" className='p-2 my-6 ' style={{border:'1px solid #ccc', padding:'16px'}} placeholder='Enter Promo Code' />

        <div className='w-full lg:w-auto lg:min-w-[300px]'>
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-[#676767]' style={{letterSpacing:"0.03em"}}>Subtotal</p>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-black' style={{letterSpacing:"0.03em"}}>${subtotal}</p>
          </div>
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-[#676767]' style={{letterSpacing:"0.03em"}}>Tax & Custom</p>
            <p className='font-sfProMd text-[14px] lg:text-[16px] text-black' style={{letterSpacing:"0.03em"}}>${shipping}</p>
          </div>
          
          <div className='flex justify-between items-center my-6'>
            <p className='font-sfProB text-[16px] lg:text-[16px] text-[#676767]' style={{letterSpacing:"0.03em"}}>Total</p>
            <p className='font-sfProB text-[16px] lg:text-[15px] text-black' style={{letterSpacing:"0.03em"}}>${total}</p>
          </div>
<p className='font-sfProMd text-[16px] text-[#676767] my-6' style={{letterSpacing:"0.03em"}}>Shipping cost and Tax & Custom fee will be calculated and included at the checkout section</p>
          <button className='w-full bg-black rounded-2xl text-white font-sfProB text-[16px] lg:text-[16px] py-3 hover:bg-gray-800 transition-colors' style={{letterSpacing:"0.03em"}}>
            Go to Checkout
          </button>
        </div>
      </div>
    </div>

  )
}