import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth/serverAuth";


export async function GET(req: NextRequest) {

    try{
        // const body = await req.json();
        const { currentUser } = await serverAuth(req);
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

export async function POST(req: NextRequest, res: NextResponse) {
    return {
        data: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
}