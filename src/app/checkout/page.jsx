import React from 'react'

export default function page() {
    return (
        <div className='w-[1500px] h-[1000px] text-[13px] flex items-center '>
            <div className='w-full max-h-[1000px] justify-between flex items-start'>
                <div className='w-[400px] h-full flex-col flex gap-[20px]'>
                    <h1 className='text-xl font-bold tracking-wider'>Billing details</h1>
                    <button className='w-full bg-[crimson] text-white p-[10px] rounded-md'>Use my current location</button>
                    <div className='w-full flex flex-col gap-[20px]'>
                        <label htmlFor="first-name">First name</label>
                        <input type="text" className='w-full bg-gray-200 outline-none p-[10px] rounded-lg' />
                    </div>

                    <div className='w-full flex flex-col gap-[20px]'>
                        <label htmlFor="first-name">Last name</label>
                        <input type="text" className='w-full bg-gray-200 outline-none p-[10px] rounded-lg' />
                    </div>


                    <div className='w-full flex flex-col gap-[20px]'>
                        <label htmlFor="first-name">Street address</label>
                        <input type="text" className='w-full bg-gray-200 outline-none p-[10px] rounded-lg' />
                    </div>


                    <div className='w-full flex flex-col gap-[20px]'>
                        <label htmlFor="first-name">Apartment, Floor, etc (optional)</label>
                        <input type="text" className='w-full bg-gray-200 outline-none p-[10px] rounded-lg' />
                    </div>


                    <div className='w-full flex flex-col gap-[20px]'>
                        <label htmlFor="first-name">Town / City</label>
                        <input type="text" className='w-full bg-gray-200 outline-none p-[10px] rounded-lg' />
                    </div>


                    <div className='w-full flex flex-col gap-[20px]'>
                        <label htmlFor="first-name">Phone number (For ease of delivery)</label>
                        <div className='flex w-full h-full items-center  rounded-lg bg-gray-200'>

                            <p className='bg-gray-300 rounded-l-lg flex h-full w-[10%] p-[10px]'>+91</p>
                            <input type="number" className='w-[90%] bg-transparent outline-none p-[10px]  rounded-lg' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-[20px]'>
                        <label htmlFor="first-name">Email address</label>
                        <input type="email" className='w-full bg-gray-200 outline-none p-[10px] rounded-lg' />
                    </div>

                    <div className='w-full flex  gap-[20px]'>
                        <input type="checkbox" />
                        <label htmlFor="first-name">Save this address for later use</label>

                    </div>

                </div>

                <div className='w-[400px] h-full flex flex-col gap-[20px]'>
                        <div className='flex p-[10px] justify-between items-center border-b-2 border-black'>
                            <p className='font-semibold'>Subtotal</p>
                            <p className='font-semibold'>$1000</p>
                        </div>

                        <div className='flex p-[10px] justify-between items-center border-b-2 border-black'>
                            <p className='font-semibold'>Delivery</p>
                            <p className='font-semibold'>Free</p>
                        </div>

                        <div className='flex p-[10px] justify-between items-center border-b-2 border-black'>
                            <p className='font-semibold'>Total</p>
                            <p className='font-semibold'>$1000</p>
                        </div>


                        <div className='flex p-[10px] justify-between items-center '>
                            <input type="radio" name="payment1" id="payment1" />
                           
                            <p className='font-semibold'>Cash on delivery</p>

                        </div>

                        <div className='flex p-[10px] justify-between items-center '>
                            <input type="radio" name="payment2" id="payment2" />
                           
                            <p className='font-semibold'>Bank</p>
                            
                        </div>

                        
                        <div className='flex p-[10px] justify-between items-center '>
                            <input type="text" name="coupon" id="coupon" placeholder='Coupon code'  className='p-[10px] outline-none border-2 border-black rounded-md'/>
                           
                            <button className='w-[150px] h-[40px] rounded-md bg-[crimson] text-white'>Apply</button>
                            
                        </div>


                </div>
            </div>
        </div>
    )
}
