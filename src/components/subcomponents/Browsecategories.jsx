import React from 'react'
import Categoriestitle from '../Categoriestitle'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMicOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

export default function Browsecategories() {
  return (
    <div className='w-[1500px]  flex flex-col gap-[20px] p-[20px] h-[400px] items-center justify-between'>

      <div className='w-full h-max flex items-center justify-between'>

        <div className='flex flex-col gap-[20px] text-[13px] '>
          <Categoriestitle text={"Categories"} />

          <h1 className=' tracking-wider font-bold text-[30px]'>Browse by category</h1>

        </div>


      </div>
      <div className='grid grid-cols-6 w-full justify-items-center'>


        <div className='catocard w-[150px] hover:bg-[crimson] hover:text-white rounded-md h-[150px] flex flex-col items-ceter justify-center gap-[20px] border-2 border-black relative'>
          <div className='w-full flex  gap-[20px] flex-col items-center justify-center'>

            <PhoneAndroidOutlinedIcon sx={{ fontSize: 40 }} />
            <p className='font-bold'>Phones</p>
          </div>


        </div>

        <div className='catocard w-[150px] hover:bg-[crimson] hover:text-white rounded-md h-[150px] flex flex-col items-ceter justify-center gap-[20px] border-2 border-black relative'>
          <div className='w-full flex  gap-[20px] flex-col items-center justify-center'>

            <ComputerOutlinedIcon sx={{ fontSize: 40 }}/>
            <p className='font-bold'>Computers</p>

          </div>


        </div>

        <div className='catocard w-[150px] hover:bg-[crimson] hover:text-white rounded-md h-[150px] flex flex-col items-ceter justify-center gap-[20px] border-2 border-black relative'>
          <div className='w-full flex  gap-[20px] flex-col items-center justify-center'>

            <WatchOutlinedIcon sx={{ fontSize: 40 }} />
            <p className='font-bold'>Smart watches</p>

          </div>


        </div>


        <div className='catocard w-[150px] hover:bg-[crimson] hover:text-white rounded-md h-[150px] flex flex-col items-ceter justify-center gap-[20px] border-2 border-black relative'>
          <div className='w-full flex  gap-[20px] flex-col items-center justify-center'>

            <CameraAltOutlinedIcon sx={{ fontSize: 40 }} />
            <p className='font-bold'>Camera</p>
          </div>


        </div>


        <div className='catocard w-[150px] hover:bg-[crimson] hover:text-white rounded-md h-[150px] flex flex-col items-ceter justify-center gap-[20px] border-2 border-black relative'>
          <div className='w-full flex  gap-[20px] flex-col items-center justify-center'>


            <HeadsetMicIcon sx={{ fontSize: 40 }} />
            <p className='font-bold'>Headsets</p>
          </div>


        </div>


        <div className='catocard w-[150px] hover:bg-[crimson] hover:text-white rounded-md h-[150px] flex flex-col items-ceter justify-center gap-[20px] border-2 border-black relative'>
          <div className='w-full flex  gap-[20px] flex-col items-center justify-center'>

            <BookOutlinedIcon sx={{ fontSize: 40 }}/>
            <p className='font-bold'>Cloths</p>
          </div>


        </div>






      </div>


    </div>
  )
}
