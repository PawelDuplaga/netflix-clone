'use client'

import useMovieList from '@/lib/hooks/useMovieList';
import React from 'react'
import MovieList from '../MovieList';

type MovieListWrapperProps = {
    title : string
}


const MovieListWrapper = ({ title } : MovieListWrapperProps) => {

    const { data: movies = []} = useMovieList();

    return (
        <MovieList title={title} data={movies}/>
    )
}

export default MovieListWrapper