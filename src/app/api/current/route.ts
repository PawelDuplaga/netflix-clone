import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth/serverAuth";


export async function GET(req: NextRequest) {

    try{
        const { currentUser } = await serverAuth();
        return NextResponse.json( currentUser, { status: 200});

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: error
        },{
            status: 400
        })
    }

}
