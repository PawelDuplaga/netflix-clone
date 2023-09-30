
import Image from 'next/image';

type MovieCardProps = {
    data : Record<string, any>
}

const MovieCard = ({ data } : MovieCardProps) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
       <img src={data.thumbnailUrl} alt={data.title} 
            className='cursor-pointer object-cover transition duration s
            hadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-20 
            delay-300 w-full h-[12vw]'
        />
    </div>
  )
}

export default MovieCard