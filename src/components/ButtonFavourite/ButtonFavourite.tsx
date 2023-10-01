import React, { useCallback, useMemo } from 'react';
import axios from 'axios';
import useCurrentUser from '@/lib/hooks/useCurrentUser';
import useFavourites from '@/lib/hooks/useFavourites';
import { BiHeart } from 'react-icons/bi';

type ButtonFavouriteProps = {
    movieId : string
}

const ButtonFavourite = ({ movieId } : ButtonFavouriteProps) => {
  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 
       border-white border-2 rounded-full flex justify-center items-center 
         transition hover:border-neutral-300"
    >
      <BiHeart className="w-[60%] h-[60%]"/>
    </div>
  )
}

export default ButtonFavourite