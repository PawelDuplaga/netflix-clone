'use client'

import Image from 'next/image'
import Link from 'next/link'
import DefaultProfileImg from 'public/images/default-blue.png'
import React from 'react'


const ProfilesPage = () => {


    const Profile = () => {
        return (
            <Link onClick={() => {}} href={'/'}>
                <div className="group flex flex-col w-44 mx-auto">
                    <div className="w-44 h-44 rounded-md flex items-center j
                                    ustify-center border-2 border-transparent 
                                    group-hover:cursor-pointer group-hover:border-white 
                                    overflow-hidden">
                        <Image 
                            src={DefaultProfileImg}
                            alt="Netflix profile image"
                            loading="eager"
                            quality={90}
                        />
                    </div>
                    <p className="text-xl text-center pt-4">Profile 1</p>
                </div>
            </Link>
        )
    }


  return (
    <div className="flex items-center h-full justify-center">
        <div className="flex flex-col">
            <h1 className="text-3xl md:text-6xl text-center">Who is watching?</h1>
            <div className='flex items-center justify-center gap-8 mt-10'>
                <Profile />
                <Profile />
                <Profile />
            </div>
        </div>
    </div>
  )
}

export default ProfilesPage