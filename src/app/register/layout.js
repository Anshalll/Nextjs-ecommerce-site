import SignInpng from '@/assets/images/signin.png'
import Image from 'next/image'


export default function RootLayout({  children }) {
  return (
    <div className='w-full flex items-center h-[600px] text-[13px]  justify-center'>

    <div className='w-[1500px] flex justify-around h-full'>
      <div className='flex items-center'>

        <div className='w-[400px] h-[400px]'>
          <Image alt="loading" src={SignInpng} className='object-contain' />
        </div>
      </div>

        {children}


    </div>

  </div>
  )
}
