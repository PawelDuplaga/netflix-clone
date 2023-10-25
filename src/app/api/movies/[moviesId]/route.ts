import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/lib/prismaDB";
import serverAuth from "@/lib/serverAuth/serverAuth";


export async function GET ({ params }: { params: { movieId: string } }) {

    try {
        await serverAuth();
        const movieId = params.movieId;

        if (typeof movieId !== 'string' || !movieId) {
            throw new Error('Invalid ID');
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if (!movie) {
            throw new Error('Invalid ID')
        }
        
        return NextResponse.json(movie, { status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json(error, { status: 400 });
    }


}