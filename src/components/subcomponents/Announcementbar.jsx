import React from 'react'
import { Josefin_Sans } from '@next/font/google'

const Josefin = Josefin_Sans({
    weight: "300",
    subsets: ["latin"]
})

export default function Announcementbar() {
  return (
    <div className='w-full flex text-[13px] bg-black h-[40px] text-white items-center justify-center'>


        <p className={Josefin.className}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-bold border-b-1 border-gray-100'>Shop now</span></p>




    </div>  
  )
}
