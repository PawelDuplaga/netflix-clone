import { NextRequest, NextResponse } from "next/server";
import { without } from "lodash";

import prismadb from "@/lib/prismaDB";
import serverAuth from "@/lib/serverAuth/serverAuth";


export async function POST(req: NextRequest) {
    try{
        const { currentUser } = await serverAuth();
        const { movieId } = await req.json();

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if (!existingMovie) {
            throw new Error('Invalid Id');
        };

        const updatedUser = await prismadb.user.update({
            where: {
                email: currentUser.email || '',
            },
            data: {
                favouriteIds: {
                    push: movieId,
                }
            },
        });

        return NextResponse.json(updatedUser, { status: 200 });

    } catch(error) {
        console.log(error);
        return NextResponse.json(error, { status : 400 });
    }
}


export async function DELETE(req: NextRequest) {
    try{
        const { currentUser } = await serverAuth();
        const { movieId } = await req.json();

        const existingMovie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if (!existingMovie) {
            throw new Error('Invalid Id');
        };

        const updatedFavouriteIds = without(currentUser.favouriteIds, movieId);

        const updatedUser = await prismadb.user.update({
            where: {
                email: currentUser.email || '',
            },
            data: {
                favouriteIds: updatedFavouriteIds,
            },
        });

        return NextResponse.json(updatedUser, { status: 200 });

    } catch(error) {
        console.log(error);
        return NextResponse.json(error, { status : 400 });
    }
}