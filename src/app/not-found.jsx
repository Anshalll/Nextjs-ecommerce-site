import Link from 'next/link'
import { Poppins , Josefin_Sans } from '@next/font/google'



const poppins  = Poppins({
  subsets: ['latin'],
  weight: "900"
})

const Josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: "500"
})

export default function NotFound() {
  return (
    <div className='w-full flex flex-col text-[13px] gap-[20px] h-[600px] items-center justify-center'>
        <h1 className={`${poppins.className} text-4xl tracking-wider`}>404 NOT FOUND</h1>
        <p className={`text-2xl ${Josefin}`}>This page does not exist.</p>

        <Link href={'/'} className='w-[200px] py-[7px] rounded-md text-white bg-[crimson] flex items-center justify-center text-lg'>Return home</Link>
    </div> 
  )
}