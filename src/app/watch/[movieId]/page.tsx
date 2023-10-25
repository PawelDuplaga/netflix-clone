'use client'

import useMovie from "@/lib/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = ({ params }: { params: { movieId: string } }) => {
    
    const movieId = params.movieId;
    const { data } = useMovie(movieId);

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
                <AiOutlineArrowLeft className="text-white" size={40}/>
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light">Watching: </span>
                    {data?.title}
                </p>
            </nav>
        </div>
    )
}

export default Watch;