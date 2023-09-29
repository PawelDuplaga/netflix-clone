'use client'

import useBillboard from '@/lib/hooks/useBillboard'
import React from 'react'

const Billboard = () => {

    const { data } = useBillboard();

  return (
    <div className='relative h-[56.25vw]'>
        <video
            className="w-full h-[56.25vw] object-cover brightness-[60%]"
            autoPlay
            muted
            loop
            poster={data?.thumbnailUrl} 
            src={data?.videoUrl}>
        </video>
        <div className="absolute top-[max(30%,54px)] md:top-[40%] ml-4 md:ml-16">
            <h2 className="text-white text-xl sm:text-3xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
               {data?.title} 
            </h2>
            <p className="text-white text-[12px] sm:text-lg md:text-xl mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                {data?.description}
            </p>
        </div>

    </div>
  )
}

export default Billboard