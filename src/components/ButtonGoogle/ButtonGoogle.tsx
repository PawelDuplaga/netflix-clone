import React from 'react'
import { FcGoogle } from 'react-icons/fc'

type ButtonGoogleProps = {
  onClick : any
}

const ButtonGoogle = ({ onClick } : ButtonGoogleProps) => {
  return (
    <button onClick={onClick} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-75 transition">
        <FcGoogle size={24}/>
    </button>
  )
}

export default ButtonGoogle