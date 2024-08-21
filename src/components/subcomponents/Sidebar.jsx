'use client'

import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar() {

    const CloseMenu = () => {
        const Sidebar  = document.getElementById('sidebar')
        Sidebar.style.right = "1000cm"
        document.body.style.overflowY = "auto"

    }

  return (
    <aside id='sidebar' className='flex w-full right-[1000cm] h-[100vh] absolute z-[1]'>

        <div className='w-[60%] bg-white  flex flex-col'>
            <div className='flex border-b-2 border-black justify-between items-center px-[20px] h-[60px]'>
                <h1>Menu</h1>
                <button onClick={CloseMenu}><CloseIcon/></button>
            </div>


            <div className='w-full h-[calc(100%-60px)] flex flex-col overflow-y-auto'>

            </div>


        </div>
        <div className=' w-[40%]  bg-black opacity-[0.7] flex flex-col'>

        </div>

    </aside>
  )
}
