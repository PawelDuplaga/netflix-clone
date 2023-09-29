import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next"
import prismadb from '@/lib/prismaDb/prismadb';
import { stringify } from 'querystring';
import { authOptions } from './authOptions';

const serverAuth = async () => {

    const session = await getServerSession(authOptions);

    if(!session?.user?.email) {
        throw new Error('Not signed in');
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        },
    })

    if (!currentUser) {
        throw new Error('Not signed in'); 
    }

    console.log(currentUser)
    return{
        currentUser
    };
}

export default serverAuth;