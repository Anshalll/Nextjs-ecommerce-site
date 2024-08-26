import React from 'react'
import GoogleIcon from '@/assets/images/google_icon.png'
import Image from 'next/image'

export default function Googleauth() {
  return (
    <div className='w-full h-max border-2 border-black p-[10px] rounded-md'>
        <button className='flex items-center w-full justify-center gap-[20px]'><Image alt='loading' width={20} height={20} src={GoogleIcon}/>Continue with google</button>
    </div>
  )
}
