import { NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';
import prismadb from '@/lib/prismaDB/prismadb';

const serverAuth = async (req: NextRequest) => {

    const session = await getSession(await req.json());

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

    return{
        currentUser
    };
}

export default serverAuth;