'use client'

import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

export default function CarousalComponent() {
    const [CarouselImages, setCarouselImages] = useState([])
    const [ActiveSlide, setActiveSlide] = useState(0)

    const ProductCategories = [
        "Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"
    ]

    useEffect(() => {

        const CarouselImages = async () => {
            const response = await fetch('/api/getcarouselimages')
            if (!response.ok) {
                console.error('Error fetching data')
            }

            const { data } = await response.json()
            setCarouselImages(data)
        }


        CarouselImages()

        

    }, [])


    useEffect(() => {
       
            
            function UpdateCarousel() {
                setActiveSlide((prev) => {
                    const main =  (prev + 1) % CarouselImages.length
                    console.log(main);
                    return main
                })
    
            }
    
    
            const carouselInterval = setInterval(UpdateCarousel , 3000)
            return ()=>  clearInterval(carouselInterval)
        
    } , [CarouselImages.length])

    return (

        <div className='text-[13px] w-[1500px] gap-[20px] h-max flex p-[20px]'>
            <div className='flex flex-col gap-[20px] h-max w-[20%] border-r-1 border-black'>
                {ProductCategories.map((value, index) => (
                    <Link href={'/'} className='hover:text-[crimson]'  key={index}>{value}</Link>
                ))}
            </div>
            <div className='w-[80%] h-[350px] relative  '>

                <div className='w-full h-full overflow-hidden '>
                    <div className='flex w-full h-full '>

                        {CarouselImages.map((value, index) => (
                            <div key={index} className={`min-w-full ${index === ActiveSlide? "block": "hidden"}`}>

                                <motion.img animate={index === ActiveSlide? {x: [300, 0]}: {x: 0} } src={value} alt="" className='w-full h-full object-cover object-center' />
                            </div>
                        ))}
                    </div>



                </div>
                <div className='absolute  top-[20rem] flex gap-[20px]  w-full items-center justify-center'>

                    {CarouselImages.map((_, index) => (
                        <button key={index} onClick={() => setActiveSlide(index)} className={`rounded-full h-[10px] w-[10px] ${ActiveSlide === index ? "bg-[crimson]" : "bg-black"}`}></button>
                    ))}

                </div>

            </div>

        </div>
        
    )
}
