'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function layout({ children }) {



  
  const pathname = usePathname()

  const Paths1 = [
      {
          "name": "My profile",
          "path": "/profile"
      },
      {
          "name": "Address Book",
          "path": "/profile/profileaddress"
      },
      {
          "name": "My Payment Options",
          "path": "/profile/payment"
      },

  ]


  const Paths2 = [
      {
          "name": "My Returns",
          "path": "/profile/returns"
      },
      {
          "name": "My Cancellations",
          "path": "/profile/cancellations"
      },


  ]

  return (
    <div className='w-[1500px] text-[13px] flex h-[700px] justify-center items-center'>
    <div className='w-full flex justify-start h-[500px] p-[20px]'>
        <div className='w-[300px] h-full flex flex-col gap-[20px]'>
            <h1 className='font-bold'>Manage my account</h1>

            <div className='flex flex-col gap-[20px] px-[20px]'>
                {Paths1.map((value, index) => (

                    <Link key={index} className={`${pathname === value.path ? "text-[crimson]" : "text-gray-700"} `} href={value.path}>{value.name}</Link>

                ))}
            </div>

            <h1 className='font-bold'>Manage my account</h1>

            <div className='flex flex-col gap-[20px] px-[20px]'>
                {Paths2.map((value, index) => (

                    <Link key={index} className={`${pathname === value.path ? "text-[crimson]" : "text-gray-700"} `} href={value.path}>{value.name}</Link>

                ))}
            </div>



        </div>


            {children}
    <div>

        </div>
    </div>
</div>
  )
}
