'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import logoImg from 'public/logo.png';
import InputAnim from '@/components/InputAnim/InputAnim';

export const AuthPage = () => {

  const [email, setEmail] = useState("");

  return (
    <div className="relative h-full w-full bg-[url('/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image 
            src={logoImg}
            alt="netflix logo"
            className="h-12 w-auto"
          />
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md ">
              <h2 className="text-4xl mb-8 font-semibold">
                Sign in
              </h2>
              <div className="flex flex-col gap-4">
                <InputAnim
                  type="email"
                  value=""
                  onChange={() => {}}
                  label='Email'
                  id='email'
                />

              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AuthPage;
