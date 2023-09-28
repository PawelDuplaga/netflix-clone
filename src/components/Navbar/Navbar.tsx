'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import logoImg from '/public/logo.png'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import MobileMenu from '../MobileMenu'

interface NavbarItemProps {
    label : string
}



const Navbar = () => {


    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    },[])

    const NavbarItem = ({label} : NavbarItemProps) => {
        return (
            <div className="text-white cursor-pointer hover:text-gray-300 transition">
                {label}
            </div>
        )
    }



  return (
    <nav className="w-full fixed z-40">
        <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
            <Image src={logoImg} alt="netflix logo" className="h-12 w-auto"/>
            <div className="flex-row ml-8 gap-7 hidden lg:flex">
                <NavbarItem label='Home' />
                <NavbarItem label='Series' />
                <NavbarItem label='Films' />
                <NavbarItem label='New & Popular' />
                <NavbarItem label='My List' />
                <NavbarItem label='Browse by languages' />
            </div>
            <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Browse</p>
                <BsChevronDown classname="text-white transition"/>
                <MobileMenu visible={showMobileMenu}/>
            </div>
            <div className="flex flex-row ml-auto gap-7 items-center">
                <div className="text-gray-200 hober:text-gray-300 cursor-pointer">
                    <BsSearch />
                </div>
                <div className="text-gray-200 hober:text-gray-300 cursor-pointer">
                    <BsBell />
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar