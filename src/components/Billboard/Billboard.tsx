'use client'

import useBillboard from '@/lib/hooks/useBillboard'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
const Billboard = () => {

    const { data } = useBillboard();

  return (
    <div className='relative h-[56vw] sm:h-[44vw] overflow-hidden'>
        <video
            className="w-full h-[56vw] sm:h-[44vw] object-cover brightness-[60%]"
            autoPlay
            muted
            loop
            poster={data?.thumbnailUrl} 
            src={data?.videoUrl}>
        </video>
        <div className="absolute top-[max(30%,54px)] md:top-[20%] lg:top-[36%] ml-4 md:ml-16">
            <h2 className="text-white text-xl sm:text-3xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
               {data?.title} 
            </h2>
            <p className="text-white text-[12px] sm:text-lg md:text-xl mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                {data?.description}
            </p>
            <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                <button 
                    className="bg-white text-white bg-opacity-30 
                    rounded-md py-1 px-2 md:py-2 md:px-4 w-auto text-xs lg:text-lg 
                    font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
                    <AiOutlineInfoCircle className="mr-1"/>
                    More Info
                </button>
            </div>
        </div>

    </div>
  )
}

export default Billboard