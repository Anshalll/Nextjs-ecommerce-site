'use client'
import React from 'react';
import { useTimer } from 'react-timer-hook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Categoriestitle from '../Categoriestitle';
import Cardgroup from './Cardgroup';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function SalesComponent({ time, data }) {

    const {

        seconds,
        minutes,
        hours,
        days,

    } = useTimer({ expiryTimestamp: time, onExpire: () => console.warn('onExpire called') });

    return (
        <div className='w-[1500px] flex flex-col gap-[40px] p-[20px] h-[600px] items-center justify-between'>

            <div className='w-full h-max flex items-center justify-between'>

                <div className='flex flex-col gap-[20px] text-[13px] '>
                    <Categoriestitle text={"Today's"} />

                    <div className='gap-[80px] text-2xl flex items-center'>
                        <h1 className=' tracking-wider font-bold text-[30px]'>Flash sales</h1>
                        <div className='flex  gap-[20px] '>
                            <div className='flex gap-[20px] items-center'>

                                <div className='flex flex-col items-center'>
                                    <span className='text-[12px] w-full'>Days</span>
                                    <p className='flex font-bold items-center gap-[20px]'>{days} <span>:</span></p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <span className='text-[12px] w-full'>hours</span>
                                    <p className='flex font-bold items-center gap-[20px]'>{hours} <span>:</span></p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <span className='text-[12px] w-full'>mins</span>
                                    <p className='flex font-bold items-center gap-[20px]'>{minutes} <span>:</span></p>
                                </div>

                                <div className='flex flex-col items-center'>
                                    <span className='text-[12px] w-full'>sec</span>
                                    <p className='font-bold'>{seconds} </p>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>

                <div className='flex gap-[20px] relative top-[30px] items-center'>
                    <button className='w-[40px] bg-gray-200 h-[40px] rounded-full flex items-center justify-center'><ArrowBackIcon /></button>
                    <button className='w-[40px] bg-gray-200 h-[40px] rounded-full flex items-center justify-center'><ArrowForwardIcon /></button>
                </div>
            </div>

            <div className='grid grid-cols-5 w-full justify-items-center'>


                {data.sales?.map((value, index) => (
                    <div key={index} className='w-[270px] relative h-[350px] flex flex-col gap-[20px]'>
                        <div className='w-full h-[250px] bg-gray-200 flex items-center justify-center'>

                            <div className='w-[190px]  h-[180px] '>
                                <img src={value.main_img} alt="" className='w-full mix-blend-multiply h-full object-contain' />
                            </div>

                        </div>
                        <div className='absolute left-[85%]  items-center justify-center  flex flex-col gap-[20px] h-[100px]'>
                            <button  className='p-[3px] bg-white rounded-full'><FavoriteBorderIcon/></button>
                            <button  className='p-[3px] bg-white rounded-full'><RemoveRedEyeIcon/></button>
                        </div>
                        <div className='w-[50px] top-[10px] left-[10px] absolute h-[20px] flex items-center justify-center rounded-md text-white bg-[crimson]'>
                        <p>-{value.discountpercent}%</p>
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


        </div>

    );
}
