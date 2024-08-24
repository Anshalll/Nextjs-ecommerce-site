import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function page() {
    return (
        <div className='w-[1500px] text-[13px] flex h-[900px] items-center justify-center p-[20px]'>
            <div className='w-[80%] p-[20px] flex flex-col h-[800px]  overflow-y-auto gap-[80px]'>
                <div className='w-[900px] h-max flex gap-[20px] items-start justify-between'>
                    <div className='w-[100px]  h-[100px] bg-gray-200'>

                    </div>


                    <div className='flex flex-col gap-[20px] w-[800px]'>
                        <h1 className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia adipisci aliquid?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium voluptatum accusamus expedita quae, veritatis commodi aliquid nostrum quaerat fuga, nihil officia aliquam et sequi quo id placeat eaque autem! Fugiat, consectetur unde sapiente quibusdam totam alias natus voluptatibus dolorum quasi labore possimus ipsam. Maxime quas reprehenderit, doloremque ut itaque animi.</p>

                        <div className='w-full flex justify-between items-center'>

                            <div className='flex gap-[20px] items-center'>

                                <div className='w-[100px] flex items-center'>
                                    <button title='add more' className='w-[20px] rounded-l-lg hover:bg-[crimson]  hover:text-white bg-gray-200'>+</button>
                                    <p className='w-[50px] flex items-center  justify-center'>1</p>
                                    <button title='remove' className='w-[20px] rounded-r-lg  hover:bg-[crimson] hover:text-white bg-gray-200'>-</button>
                                </div>
                                <button title='delete'><p className='text-[crimson]  underline underline-offset-1'>Delete</p></button>
                            </div>

                            <p className='text-lg '>12,000</p>
                        </div>



                    </div>


                </div>

          
            </div>

            <div className='w-[20%] flex flex-col h-[800px] gap-[20px]'>
                <h1 className='text-xl'>Subtotal (2 items): <span className='font-bold'>609</span></h1>
                <button className='w-full p-[10px] rounded-full bg-[crimson] text-white'>Proceed to checkout</button>
            </div>
        </div>
    )
}
