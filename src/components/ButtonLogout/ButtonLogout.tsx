'use client'

import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { signOut } from 'next-auth/react';

type ButtonLogoutProps = {
  onClick : any
}

const ButtonLogout = () => {
  return (
    <button onClick={() => signOut()} className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-75 transition">
        LOGOUT
    </button>
  )
}

export default ButtonLogout