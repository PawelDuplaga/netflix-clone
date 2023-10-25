'use client'

import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';


type ButtonPlayProps = {
    movieId : string;
}

const ButtonPlay = ({ movieId } : ButtonPlayProps) => {
    const router = useRouter();

    return (
        <button
        onClick={() => router.push(`/watch/${movieId}`)}
        className="bg-white text-black bg-opacity-80
                    rounded-md py-1 px-2 md:py-2 md:px-4 w-auto text-xs lg:text-lg 
                    font-semibold flex flex-row items-center hover:bg-opacity-100 transition"
        >
            <BsFillPlayFill className="mr-1"/>
            Play
        </button>
    )
}
  

export default ButtonPlay;