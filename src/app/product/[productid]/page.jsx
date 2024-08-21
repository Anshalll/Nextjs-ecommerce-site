import React from 'react'
import Categoriestitle from '@/components/Categoriestitle'
export default function page({ params }) {
    return (
        <div className='w-[1500px] flex flex-col gap-[80px] items-center justify-center text-[13px] h-max p-[20px]'>
            <div className='w-full flex  justify-between gap-[20px] items-center'>
                <div className='flex flex-col justify-between gap-[20px] items-center w-[200px] h-[400px]'>
                    <div className='w-[100px] h-[100px] bg-gray-200'>

                    </div>

                    <div className='w-[100px] h-[100px] bg-gray-200'>

                    </div>

                    <div className='w-[100px] h-[100px] bg-gray-200'>

                    </div>
                </div>



                <div className='w-[400px] h-[400px] bg-gray-200'>

                </div>


                <div className='w-[400px] bg-gray-100 h-[400px]'>

                </div>

            </div>


            <div className='flex flex-col w-full gap-[80px]'>
                <div className='w-full flex items-center justify-between'>

                    <Categoriestitle text={"Related products"} />

                    <button className='w-[100px] p-[7px] bg-[crimson] text-white rounded-md'>View all</button>

                </div>

                <div className='grid grid-cols-5 w-full  justify-items-center'>


                    <div className='w-[200px] rounded-md h-[200px] justify-self bg-gray-200 relative'>

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
