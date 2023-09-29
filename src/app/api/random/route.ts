import { NextResponse } from "next/server";
import prismadb from '@/lib/prismaDb/prismadb';
import serverAuth from "@/lib/serverAuth/serverAuth";

export async function GET() {
    
    try {
        await serverAuth();

        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip: randomIndex
        });

        return NextResponse.json({
            body: randomMovies[0]
        },{
            status: 200
        })

    } catch (error) {
        return NextResponse.json({
            error
        },{ 
            status : 400
        })
    }
}