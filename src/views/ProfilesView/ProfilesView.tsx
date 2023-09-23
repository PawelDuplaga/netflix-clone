import { authOptions } from '@/lib/serverAuth/authOptions';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import React from 'react'

const ProfilesView = async () => {

    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/auth')
    }

    return (
        <div>ProfilesView</div>
    )
}

export default ProfilesView