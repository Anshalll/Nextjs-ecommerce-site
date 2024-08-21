'use client'
import React from 'react'



export default function page() {



    return (

        <form className='w-[800px] h-full flex flex-col gap-[20px]'>
            <h1 className='text-lg text-[crimson] font-bold'>Edit your profile</h1>
            <div className='w-full flex items-center gap-[20px] justify-between'>
                <div className='profilefields w-full flex flex-col gap-[20px]'>
                    <h1 className='font-semibold'>First name</h1>
                    <input type="text" className='w-full p-[10px] bg-gray-200 rounded-lg outline-none' />
                </div>
                <div className='w-full flex flex-col gap-[20px]'>
                    <h1 className='font-semibold'>Last name</h1>
                    <input type="text" className='w-full p-[10px] bg-gray-200 rounded-lg outline-none' />
                </div>

            </div>


            <div className='w-full flex items-center gap-[20px] justify-between'>

                <div className='w-full flex flex-col gap-[20px]'>
                    <h1 className='font-semibold'>Email</h1>
                    <input type="text" className='w-full p-[10px] bg-gray-200 rounded-lg outline-none' />
                </div>


                <div className='w-full flex flex-col gap-[20px]'>
                    <h1 className='font-semibold'>Address</h1>
                    <input type="text" className='w-full p-[10px] bg-gray-200 rounded-lg outline-none' />
                </div>

            </div>


            <div className='w-full flex flex-col gap-[20px]'>

                <h1 className='font-semibold'>Password changes</h1>

                <input type="text" className='w-full p-[10px] bg-gray-200 rounded-lg outline-none' placeholder='Current password' />
                <input type="text" className='w-full p-[10px] bg-gray-200 rounded-lg outline-none' placeholder='New password' />
                <input type="text" className='w-full p-[10px] bg-gray-200 rounded-lg outline-none' placeholder='Confirm password' />


            </div>

            <div className='w-full flex gap-[20px] justify-end items-center'>
                <button>Cancel</button>
                <button className='bg-[crimson] w-[200px] h-[40px] rounded-md text-white'>Save changes</button>
            </div>

        </form>
    )
}
