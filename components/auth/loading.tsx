import Image from 'next/image'
import React from 'react'

export const Loading = () => {
    return (
        <div className='min-h-screen h-full w-full flex flex-col justify-center items-center'>
            <Image
                src="/images/logo.svg"
                alt="Logo"
                width={120}
                height={100}
                className='animate-pulse duration-700'
            />
        </div>
    )
}
