import React from 'react'
import CarousalComponent from '@/components/subcomponents/CarousalComponent'
import SalesComponent from '@/components/subcomponents/SalesComponent'
import Browsecategories from '@/components/subcomponents/Browsecategories';
import Categoriestitle from '@/components/Categoriestitle';
import Cardgroup from '@/components/subcomponents/Cardgroup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Homemainpng from '@/assets/images/homemain.png'
import Image from 'next/image';
import Frame1 from '@/assets/images/Frame645.png'
import Frame2 from '@/assets/images/Frame768.png'



export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 24 * 60 * 60 * 3);

  return (
    <div className='w-full flex-col gap-[60px] flex items-center text-[13px]'>
      <CarousalComponent />

      <SalesComponent time={time} />
      <hr className='w-full h-[10px]'/>
      <Browsecategories />
      <div className='w-[1500px]  flex flex-col gap-[40px] p-[20px] h-[600px] items-center justify-between'>

        <div className='w-full h-max flex items-center justify-between'>

          <div className='flex flex-col gap-[20px] text-[13px] '>
            <Categoriestitle text={"This month"} />


            <h1 className=' tracking-wider font-bold text-[30px]'>Best selling products</h1>


          </div>

          <div className='flex gap-[20px] relative top-[30px] items-center'>
            <button className='w-[40px] bg-gray-200 h-[40px] rounded-full flex items-center justify-center'><ArrowBackIcon /></button>
            <button className='w-[40px] bg-gray-200 h-[40px] rounded-full flex items-center justify-center'><ArrowForwardIcon /></button>
          </div>
        </div>

        <Cardgroup />


      </div>
      <hr className='w-full h-[10px]'/>

      <div className='w-[1170px] h-[500px]'>
        <Image src={Homemainpng} className='w-full h-full object-contain' />
      </div>
      <hr className='w-full h-[10px]'/>
      <div className='w-[1500px]  flex flex-col gap-[40px] p-[20px] h-[600px] items-center justify-between'>

        <div className='w-full h-max flex items-center justify-between'>

          <div className='flex flex-col gap-[20px] text-[13px] '>
            <Categoriestitle text={"Our products"} />


            <h1 className=' tracking-wider font-bold text-[30px]'>Explore our products</h1>


          </div>

          <div className='flex gap-[20px] relative top-[30px] items-center'>
            <button className='w-[40px] bg-gray-200 h-[40px] rounded-full flex items-center justify-center'><ArrowBackIcon /></button>
            <button className='w-[40px] bg-gray-200 h-[40px] rounded-full flex items-center justify-center'><ArrowForwardIcon /></button>
          </div>
        </div>

        <Cardgroup />


      </div>

      <hr className='w-full h-[10px]'/>
      <div className='w-full flex flex-col gap-[20px]'>
        <Categoriestitle text={'Featured'} />
        <h1 className=' tracking-wider font-bold text-[30px]'>Explore our products</h1>
      <div className='w-full flex items-center justify-center p-[40px]'>

        <div className='w-[1170px] flex gap-[20px] items-center'>
          <Image src={Frame1} className='w-[90%] h-full object-contain ' />
          <Image src={Frame2} className='w-full h-full object-contain' />

        </div>
      </div>
      </div>

    </div>
  )
}
