import SignInpng from '@/assets/images/signin.png'
import Image from 'next/image'

export default function RootLayout({  children }) {
  return (
    <div className='w-full relative top-[50%] flex items-center text-[13px]  h-[600px] justify-center'>

    <div className='w-[1500px] flex justify-around h-full'>
      <div className='flex items-center'>

        <div className='w-[400px] h-[400px]'>
          <Image src={SignInpng} className='object-contain' />
        </div>
      </div>

        {children}


    </div>

  </div>
  )
}
