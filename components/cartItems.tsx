// components/CartItems.tsx
'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useCart } from '@/context/cartContext'


type CartItemProps = {
  id: number
  image: StaticImageData | string
  name: string
  price: number
  quantity: number
  totalPrice: number
}

const CartItems = ({id, image, name, price, quantity, totalPrice}: CartItemProps) => {
  const { updateQuantity } = useCart()

  return (
    <div className='py-6'>
         <div className="hidden lg:block bg-[#cccccc] h-[1px] w-full my-4" />
         <div className='hidden lg:block'>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="items-center my-6">
        {/* Item - image + name */}
        <div className='flex items-center gap-3'>
          <div className='w-[47px] h-[47px] lg:w-[50px] lg:h-[50px] flex-shrink-0 bg-[#F5F5F5] rounded'>
            <Image src={image} alt={name} className='w-full h-full object-cover rounded' width={80} height={80}/>
          </div>
          <h3 className='font-sfPro text-[14px] lg:text-[20px] text-black' style={{letterSpacing:"-0.01em"}}>
            {name}
          </h3>
        </div>

        {/* Unit Price */}
        <p className='font-sfPro text-[14px] lg:text-[20px] text-black' style={{letterSpacing:"-0.01em"}}>
          ${price.toFixed(2)}
        </p>

        {/* Quantity */}
      {/* Quantity - Desktop */}
<div className='flex items-center gap-3'>
  <button 
    onClick={() => updateQuantity(id, quantity - 1)}
    className='w-8 h-8 flex items-center justify-center hover:opacity-60'
  >
    −
  </button>
  <input
    type="text"
    inputMode="numeric"
    value={quantity}
    onChange={(e) => {
      const val = parseInt(e.target.value)
      if (!isNaN(val)) updateQuantity(id, val)
    }}
    className='font-sfPro text-[16px] w-8 text-center border border-[#E5E5E5] rounded-xl bg-transparent outline-none'
  />
  <button 
    onClick={() => updateQuantity(id, quantity + 1)}
    className='w-8 h-8 flex items-center justify-center hover:opacity-60'
  >
    +
  </button>
</div>

        {/* Total Price */}
        <p className='font-sfProB text-[18px] text-black' style={{letterSpacing:"-0.01em"}}>
          ${totalPrice.toFixed(2)}
        </p>
      </div>
         </div>
     
      {/* Mobile View */}
        <div className="flex lg:hidden items-center justify-between my-6">
        {/* Item - image + name */}
        <div className='w-[47px] h-[47px] flex-shrink-0 bg-[#F5F5F5] rounded'>
            <Image src={image} alt={name} className='w-full h-full object-cover rounded' width={47} height={47}/>
          </div>
        <div className='flex flex-col items-start ml-4 gap-3'>
          
          <h3 className='font-sfProXpd text-[14px] lg:text-[20px] text-black' style={{letterSpacing:"-0.03em"}}>
            {name}
          </h3>
          <p className='font-sfProXpd text-[12px] text-[#676767]' style={{letterSpacing:"-0.01em"}}>
          ${price.toFixed(2)}
        </p>
        </div>

        {/* Unit Price */}
        

        {/* Quantity */}
       {/* Quantity - Desktop */}
<div className='flex items-center gap-1'>
  <button 
    onClick={() => updateQuantity(id, quantity - 1)}
    className='w-8 h-8 flex items-center justify-center hover:opacity-60'
  >
    −
  </button>
  <input
    type="text"
    inputMode="numeric"
    value={quantity}
    onChange={(e) => {
      const val = parseInt(e.target.value)
      if (!isNaN(val)) updateQuantity(id, val)
    }}
    className='font-sfPro text-[16px] w-8 text-center border border-[#E5E5E5] rounded-lg bg-transparent outline-none'
  />
  <button 
    onClick={() => updateQuantity(id, quantity + 1)}
    className='w-8 h-8 flex items-center justify-center hover:opacity-60'
  >
    +
  </button>
</div>
        {/* Total Price */}
       
      </div>
    </div>
  )
}

export default CartItems