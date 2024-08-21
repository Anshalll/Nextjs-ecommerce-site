import React from 'react'
import AboutImage from '@/assets/images/aboutimage.png'
import Image from 'next/image'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import About1 from '@/assets/images/about1.png'
import About2 from '@/assets/images/about2.png'
import About3 from '@/assets/images/about3.png'
import Link from 'next/link';

export default function page() {
    return (
        <div className='w-[1500px] text-[13px] flex flex-col gap-[80px] items-center justify-center h-max p-[20px]'>
            <div className='w-full flex items-center justify-between'>

                <div className='flex flex-col w-[60%] gap-[20px] p-[20px]'>
                    <h1 className='text-2xl font-semibold tracking-wide'>Our story</h1>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <div className='w-[40%] flex items-center justify-center'>
                    <div className='w-[300px] h-[300px]'>
                        <Image src={AboutImage} className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-between items-center'>

                <div className='aboutcard w-[200px] flex flex-col hover:text-white hover:bg-[crimson] gap-[20px] items-center justify-center h-[200px] border-2 border-black'>

                    <div className='iconbg bg-gray-500 p-[10px] rounded-full'>

                        <div className='icon bg-black text-white p-[10px] rounded-full'>

                            <StorefrontOutlinedIcon />

                        </div>

                    </div>
                    <h1 className='font-bold text-2xl '>10.5K</h1>
                    <p className='text-md font-semibold'>Sallers active our site</p>
                </div>

                <div className='aboutcard w-[200px] flex flex-col hover:text-white hover:bg-[crimson] gap-[20px] items-center justify-center h-[200px] border-2 border-black'>

                    <div className='iconbg bg-gray-500 p-[10px] rounded-full'>

                        <div className='icon bg-black text-white p-[10px] rounded-full'>

                            <AttachMoneyOutlinedIcon />

                        </div>

                    </div>
                    <h1 className='font-bold text-2xl '>33k</h1>
                    <p className='text-md font-semibold'>Mopnthly Produduct Sale</p>

                </div>


                <div className='aboutcard w-[200px] flex flex-col hover:text-white hover:bg-[crimson] gap-[20px] items-center justify-center h-[200px] border-2 border-black'>

                    <div className='iconbg bg-gray-500 p-[10px] rounded-full'>

                        <div className='icon bg-black text-white p-[10px] rounded-full'>

                            <BookOnlineOutlinedIcon />

                        </div>

                    </div>
                    <h1 className='font-bold text-2xl '>45.5k</h1>
                    <p className='text-md font-semibold'>Customer active in our site</p>
                </div>

                <div className='aboutcard w-[200px] flex flex-col hover:text-white hover:bg-[crimson] gap-[20px] items-center justify-center h-[200px] border-2 border-black'>

                    <div className='iconbg bg-gray-500 p-[10px] rounded-full'>

                        <div className='icon bg-black text-white p-[10px] rounded-full'>

                            <PaymentsOutlinedIcon />

                        </div>

                    </div>
                    <h1 className='font-bold text-2xl '>25k</h1>
                    <p className='text-md font-semibold'>Anual gross sale in our site</p>
                </div>

            </div>

            <div className='flex w-full items-center  justify-between p-[20px]'>
                <div className='w-[300px] h-max flex flex-col gap-[20px]'>
                    <div className='w-[300px] flex h-[400px] bg-gray-200 justify-center items-end'>

                        <Image src={About1} className='object-contain' />
                    </div>

                    <h1 className='text-xl font-bold tracking-wider'>Tom cruise</h1>
                    <p>Founder & Chairman</p>
                    <div className='flex w-max gap-[20px] items-center'>
                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" />
                        </Link>

                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/facebook--v1.png" alt="facebook--v1" />
                        </Link>

                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/twitter--v1.png" alt="twitter--v1" />
                        </Link>

                    </div>
                </div>

                <div className='w-[300px] h-max flex flex-col gap-[20px]'>
                    <div className='w-[300px] flex h-[400px] bg-gray-200 justify-center items-end'>

                        <Image src={About2} className='object-contain' />
                    </div>

                    <h1 className='text-xl font-bold tracking-wider'>Will Smith</h1>
                    <p>Managing director</p>
                    <div className='flex w-max gap-[20px] items-center'>
                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" />
                        </Link>

                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/facebook--v1.png" alt="facebook--v1" />
                        </Link>

                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/twitter--v1.png" alt="twitter--v1" />
                        </Link>

                    </div>
                </div>


                <div className='w-[300px] h-max flex flex-col gap-[20px]'>
                    <div className='w-[300px] flex h-[400px] bg-gray-200 justify-center items-end'>

                        <Image src={About3} className='object-contain' />
                    </div>

                    <h1 className='text-xl font-bold tracking-wider'>Emma watson</h1>
                    <p>Product designer</p>
                    <div className='flex w-max gap-[20px] items-center'>
                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" />
                        </Link>

                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/facebook--v1.png" alt="facebook--v1" />
                        </Link>

                        <Link href={'/'}>
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/twitter--v1.png" alt="twitter--v1" />
                        </Link>

                    </div>
                </div>


            </div>

            <div className='w-full justify-center flex gap-[20px] items-center p-[20px]'>

                <div className='flex flex-col justify-center items-center gap-[20px] rounded-full w-[300px] h-[300px]'>

                    <div className='iconbg bg-gray-500 p-[10px] rounded-full'>

                        <div className='icon bg-black text-white p-[10px] rounded-full'>

                            <LocalShippingOutlinedIcon />

                        </div>

                    </div>
                    <h1 className='text-lg font-bold tracking-wider'>FREE AND FAST DELIVERY</h1>
                    <p>Free delivery for all orders over $140</p>

                </div>

                <div className='flex flex-col justify-center items-center gap-[20px] rounded-full w-[300px] h-[300px]'>

                    <div className='iconbg bg-gray-500 p-[10px] rounded-full'>

                        <div className='icon bg-black text-white p-[10px] rounded-full'>

                            <SupportAgentOutlinedIcon />

                        </div>

                    </div>
                    <h1 className='text-lg font-bold tracking-wider'>24/7 CUSTOMER SERVICE</h1>
                    <p>Friendly 24/7 customer support</p>

                </div>


                <div className='flex flex-col justify-center items-center gap-[20px] rounded-full w-[300px] h-[300px]'>

                    <div className='iconbg bg-gray-500 p-[10px] rounded-full'>

                        <div className='icon bg-black text-white p-[10px] rounded-full'>

                            <ShieldOutlinedIcon />

                        </div>

                    </div>
                    <h1 className='text-lg font-bold tracking-wider'>MONEY BACK GUARANTEE</h1>
                    <p>We reurn money within 30 days</p>

                </div>

            </div>

        </div>
    )
}
