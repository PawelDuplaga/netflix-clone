'use client'

import React from 'react'
import { BsGithub } from 'react-icons/bs'

type ButtonGithubProps = {
  onClick : any
}

const ButtonGithub = ({ onClick } : ButtonGithubProps) => {
  return (
    <button onClick={onClick} className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-75 transition">
        <BsGithub size={24}/>
    </button>
  )
}

export default ButtonGithub