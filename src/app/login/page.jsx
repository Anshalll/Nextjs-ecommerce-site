'use client'
import React from 'react'
import Googleauth from '@/components/subcomponents/Googleauth'

import { Roboto } from '@next/font/google'


const roboto = Roboto({
  weight: "400",
  subsets: ['latin']
})

export default function page() {



  return (



    <div className=' gap-[40px]  w-[600px] flex-col flex items-center justify-center'>
      <div className='h-max w-[80%] flex flex-col gap-[20px]'>
        <h1 className={`${roboto.className} text-2xl tracking-wider font-bold`}>Login into your account</h1>
        <p className=''>Enter you detail below</p>
        <Googleauth/>
      </div>


      <div className='flex flex-col w-[80%] h-max gap-[20px]'>
        <input type="text" className='border-b-2 py-[10px] border-gray-100 focus:border-b-2 focus:border-black focus:outline-none' placeholder='username or email' />
        <input type="password" className='border-b-2 py-[10px] border-gray-100 focus:border-b-2 focus:border-black focus:outline-none' placeholder='password' />

      </div>


      <div className='w-[80%] flex justify-between  items-center'>
        <button className='w-[100px] p-[7px] bg-[crimson] text-white rounded-md'>Login</button>
        <button className='text-[crimson]'>Forgot password</button>
      </div>


    </div>

    
  )
}
