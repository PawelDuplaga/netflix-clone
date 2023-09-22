import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth/serverAuth";


async function GET(req: NextRequest, res: NextResponse) {

    try{
        // const body = await req.json();
        const { currentUser } = await serverAuth(req);
        



    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: error
        },{
            status: 400
        })
    }

}