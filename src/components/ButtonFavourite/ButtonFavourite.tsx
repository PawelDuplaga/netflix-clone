'use client'

import React, { useCallback, useMemo } from 'react';
import axios from 'axios';
import useCurrentUser from '@/lib/hooks/useCurrentUser';
import useFavourites from '@/lib/hooks/useFavourites';
import { BiHeart, BiHeartCircle } from 'react-icons/bi';

type ButtonFavouriteProps = {
    movieId : string
}

const ButtonFavourite = ({ movieId } : ButtonFavouriteProps) => {

  const { data: favouriteMovies, mutate: mutateFavourites } = useFavourites();
  const { data: currentUser, mutate: mutateUser } = useCurrentUser();

  const isFavourite = useMemo(() => {
    const list = currentUser?.favouriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavourites = useCallback(async () => {
    let response;

    //first do then check for better user experience
    // if (!isFavourite) {
    //   mutateFavourites(
    //     [...favouriteMovies, movieId]
    //   );
    // } else {
    //   mutateFavourites(
    //     favouriteMovies.map((id : string) => { if (id !== movieId) return id; })
    //   );
    // }
    // console.log(favouriteMovies)

    if (isFavourite) {
      response = await axios.delete('/api/favourite', { data : { movieId }});
    } else {
      response = await axios.post('/api/favourite', { movieId })
    }

    const updatedFavouriteIds = response?.data?.favouriteIds;

    mutateUser({
      ...currentUser,
      favouriteIds: updatedFavouriteIds
    });
    mutateFavourites();
  }, [movieId, currentUser, isFavourite, mutateUser, mutateFavourites])

  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 
       border-white border-2 rounded-full flex justify-center items-center 
         transition hover:border-neutral-300"
         onClick={toggleFavourites}
    >
      {isFavourite ? 
        <BiHeart className="w-[60%] h-[60%]"/> : <BiHeartCircle className="w-[60%] h-[60%]"/>}
    </div>
  )
}

export default ButtonFavourite