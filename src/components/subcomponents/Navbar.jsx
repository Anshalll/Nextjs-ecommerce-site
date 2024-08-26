'use client'

import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Poppins } from '@next/font/google';

import { usePathname } from 'next/navigation';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',

});



export default function Navbar() {



    const Paths = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "About",
            "path": "/about"
        },
        {
            "name": "Contact",
            "path": "/contact"
        },
        {
            "name": "Login",
            "path": "/login"
        }
    ]

    const Pathname = usePathname()

    const OpenMenu = () => {
        const Sidebar = document.getElementById('sidebar')
        Sidebar.style.right = "0cm"
        document.body.style.overflowY = "hidden"

    }


    return (
        <nav className='w-full border-b-1  border-black h-[80px] text-[13px] flex items-center justify-between'>
            <div className='flex items-center gap-[20px] px-[100px]'>

                <button className='lg:hidden' onClick={OpenMenu}><MenuIcon /></button>
                <h1 className='font-bold text-2xl'>Ecommerce</h1>
            </div>



            <div className='rounded-lg flex items-center bg-gray-100 w-[600px] h-[40px] px-[10px]'>
                <input type="text" className='w-[90%] font-semibold h-full bg-transparent focus:outline-none px-[40px]' placeholder='What are you looking for?' />
                <SearchIcon className='w-[10%]' />
            </div>

            <div className='flex items-center gap-[40px] px-[40px]'>

                <div className={`flex  font-semibold items-center gap-[40px] ${poppins.className}`}>
                    {Paths.map((value, index) => {
                        return <Link key={index} className={`${Pathname === value.path ? "border-b-2 border-[crimson]" : ""} `} href={value.path}>{value.name}</Link>
                    })}
                </div>

                <Link href={'/wishlist'} className='hover:text-[crimson]'><FavoriteBorderIcon /></Link>
                <Link href={'/cart'} className='hover:text-[crimson]'><LocalMallOutlinedIcon /></Link>


            </div>
        </nav>
    )
}
