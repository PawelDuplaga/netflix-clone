import prismadb from '@/lib/prismaDb/prismadb';
import serverAuth from '@/lib/serverAuth/serverAuth';
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        await serverAuth();
        const movies = await prismadb.movie.findMany();
        return NextResponse.json(movies, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, { status: 400 })
    }
}