'use client'
import React from 'react'
import LoadingImage from '@/assets/images/loadingicon.gif'
import Image from 'next/image'
export default function loading() {
  return (
   <Image src={LoadingImage} width={20} height={20} alt='loading'/>
  )
}
