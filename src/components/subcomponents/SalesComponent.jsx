'use client'
import React  from 'react';
import { useTimer } from 'react-timer-hook';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Categoriestitle from '../Categoriestitle';
import Cardgroup from './Cardgroup';

export default function SalesComponent({ time }) {

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
                  <Categoriestitle text={"Today's"}/>

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

       <Cardgroup/>


        </div>

    );
}
