import React from 'react'

interface MobileMenuProps {
    visible? : boolean
}

interface NavbarItemProps { 
    label : string
}

const MobileMenu = ({ visible } : MobileMenuProps) => {

    if (!visible) return null;

    const MobileMenuItem = ({ label } : NavbarItemProps) => {
        return (
            <div className='px-3 text-center text-white hover:underline'>
                    {label}
            </div>           
        )
    }

    return (
        <div className="absolute bg-black w-56 top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                <MobileMenuItem label='Home' />
                <MobileMenuItem label='Series' />
                <MobileMenuItem label='Films' />
                <MobileMenuItem label='New & Popular' />
                <MobileMenuItem label='My List' />
                <MobileMenuItem label='Browse by languages' />

            </div>
        </div>
    )
}

export default MobileMenu