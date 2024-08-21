import React from 'react'
import { Roboto } from '@next/font/google'
import Categoriestitle from '@/components/Categoriestitle'
const roboto = Roboto({
  subsets: ['latin'],
  weight: "400"
})

export default function page() {
  return (
    <div className='w-[1500px] text-[13px] h-full flex flex-col items-center justify-center py-[20px]  gap-[40px]'>
      <div className='w-full  flex items-center justify-between'>
        <h1 className={`${roboto.className} flex items-center gap-[10px]`}>Wishlist <span>(4)</span></h1>
        <button className='w-[100px] p-[7px] bg-[crimson] text-white'>Add to cart</button>

      </div>

      <div className='grid grid-cols-5 w-full justify-items-center'>


        <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

        </div>


        <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

        </div>


        <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

        </div>


        <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

        </div>


        <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

        </div>





      </div>


      <div className='flex flex-col w-full gap-[20px]'>
        <div className='w-full flex items-center justify-between'>

          <Categoriestitle text={"Just for you"} />

          <button className='w-[100px] p-[7px] bg-[crimson] text-white rounded-md'>View all</button>

        </div>

        <div className='grid grid-cols-5 w-full justify-items-center'>


          <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

          </div>


          <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

          </div>


          <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

          </div>


          <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

          </div>


          <div className='w-[200px] rounded-md h-[200px] bg-gray-200 relative'>

          </div>





        </div>
      </div>


    </div>
  )
}
