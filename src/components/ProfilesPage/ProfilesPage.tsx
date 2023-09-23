'use client'

import Image from 'next/image'
import DefaultProfileImg from 'public/images/default-blue.png'

const ProfilesPage = () => {
  return (
    <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl">Who is watching?</h1>
                <div className='flex items-center justify-center gap-8 mt-10'>
                    <div onClick={() => {}}>
                        <Image 
                            src={DefaultProfileImg}
                            alt="Netflix profile image"
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProfilesPage