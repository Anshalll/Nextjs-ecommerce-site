import React from 'react'
import CarousalComponent from '@/components/subcomponents/CarousalComponent'
import SalesComponent from '@/components/subcomponents/SalesComponent'
import Browsecategories from '@/components/subcomponents/Browsecategories';

export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 24 * 60 * 60 * 3);

  return (
    <div className='w-full flex-col gap-[60px] flex items-center text-[13px]'>
      <CarousalComponent />
      <SalesComponent time={time} />
      <Browsecategories />
    </div>
  )
}
