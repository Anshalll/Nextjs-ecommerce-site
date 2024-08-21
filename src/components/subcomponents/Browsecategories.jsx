import React from 'react'
import Categoriestitle from '../Categoriestitle'
export default function Browsecategories() {
  return (
    <div className='flex flex-col gap-[40px] w-[1500px] '>
      <div className='flex flex-col gap-[20px] '>

        <Categoriestitle text={"Categories"} />
        <div className='gap-[80px] text-2xl flex items-center justify-between'>
          <h1 className=' tracking-wider font-bold text-[30px]'>Explore by Categories</h1>
         

          <div className='flex items-center justify-center'>
                <button className='w-[100px] p-[3px] bg-[crimson] text-[13px] text-white rounded-md'>More</button>
            </div>

           
      
        </div>
      </div>


      <div className=''>

      </div>
    </div>
  )
}
