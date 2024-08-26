import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Cardgroup({ data }) {
    return (
        <>
            <div className='grid grid-cols-5 w-full justify-items-center'>


                {data?.map((value, index) => (
                    <div key={index} className='w-[270px] relative h-[350px] flex flex-col gap-[20px]'>
                        <div className='w-full h-[250px] bg-gray-200 flex items-center justify-center'>

                            <div className='w-[190px]  h-[180px] '>
                                <img src={value.main_img} alt="loading" className='w-full mix-blend-multiply h-full object-contain' />
                            </div>

                        </div>
                        <div className='absolute left-[85%]  items-center justify-center  flex flex-col gap-[20px] h-[100px]'>
                            <button className='p-[3px] bg-white rounded-full'><FavoriteBorderIcon /></button>
                            <button className='p-[3px] bg-white rounded-full'><RemoveRedEyeIcon /></button>
                        </div>

                        <p className='text-[16px] font-semibold'>{value.name.length > 20 ? `${value.name.slice(0, 20)}...` : value.name}</p>
                        <p className='flex items-center gap-[10px] text-[14px]'>₹{value.discountprice}<del className='text-[crimson]'>₹{value.price}</del></p>
                        <p className='text-yellow-400 text-[14px] flex items-center gap-[10px]'>&#9733;&#9733;&#9733;&#9733;&#9733; <span className='text-black'>({value.reviews})</span></p>
                    </div>

                ))}

            </div>

            <div className='flex items-center justify-center'>
                <button className='w-[200px] p-[10px] bg-[crimson] text-white rounded-md'>View all</button>
            </div>
        </>
    )
}
