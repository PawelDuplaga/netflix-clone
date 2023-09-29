import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth/serverAuth";


export async function GET() {

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

export async function POST(req: NextRequest, res: NextResponse) {
    return {
        data: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
}