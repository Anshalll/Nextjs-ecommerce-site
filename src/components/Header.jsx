import React from 'react'
import Navbar from './subcomponents/Navbar'
import Sidebar from './subcomponents/Sidebar'
import Announcementbar from './subcomponents/Announcementbar'



export default function Header() {
  return (
   <header className='w-full'>

        <Sidebar/>
        <Announcementbar/>
        <Navbar/>
   </header>
  )
}
