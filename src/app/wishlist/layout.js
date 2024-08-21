import React from 'react'

export default function layout({ children }) {
  return (
    <div className='w-full flex h-[700px] justify-center'>
        {children}
    </div>
  )
}
