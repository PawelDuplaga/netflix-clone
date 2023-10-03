'use client'

import React from 'react'
import MovieList from '../MovieList';
import useFavourites from '@/lib/hooks/useFavourites';

type MovieListFavWrapperProps = {
    title : string
}


const MovieListFavWrapper = ({ title } : MovieListFavWrapperProps) => {

    const { data: movies = []} = useFavourites();
    // slow
    return (
        <div className='px-4'>
            <MovieList title={title} data={movies}/>
        </div>
    )
}

export default MovieListFavWrapper