import { NextResponse } from "next/server";

import prismadb from "@/lib/prismaDB";
import serverAuth from "@/lib/serverAuth/serverAuth";

export async function GET() {

    try{
        const { currentUser } = await serverAuth();
        const favouriteMovies = await prismadb.movie.findMany({
            where: {
                id: {
                    in: currentUser?.favouriteIds,
                }
            }
        });

        return NextResponse.json(favouriteMovies, { status: 200 });

    } catch(error) {
        console.log(error);
        return NextResponse.json(error, { status: 400 });
    }

}