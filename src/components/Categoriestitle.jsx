import React from 'react'

export default function Categoriestitle({ text }) {
  return (
    <div className='flex gap-[40px]  text-[crimson]'>
    <span className='border-l-8 border-[crimson]'></span>
    <h1 className='font-bold'>{text}</h1>
</div>
  )
}
