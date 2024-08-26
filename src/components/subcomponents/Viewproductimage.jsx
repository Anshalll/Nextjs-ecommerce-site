'use client'

import React, { useEffect, useState } from 'react'

export default function Viewproductimage({ image }) {

    const [DialogState, setDialogState] = useState(false)

    useEffect(() => {
        
        image ? setDialogState(true) : setDialogState(false)
    }, [image])

    return (
        <>
            {DialogState &&  <dialog className='w-[100vw] h-[100vh] absolute '>
                <div className='w-[16rem] h-[300px] bg-white '>
                
                <img src={image} alt="" />
                </div>
            </dialog>}
        </>
    )
}
