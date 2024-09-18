import WhiteList from "@/model/WhiteList";
import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongoose";

export async function POST(req: Request) {
    console.log("hello")
    const body = await req.json();
    try {
        await connectMongo()
        const { wallet } = body;
        const response = await WhiteList.find({ wallet });
        let isExist;
        if (response && response.length) isExist = true
        else isExist = false
        return NextResponse.json({ success: true, isExist })
    } catch (error) {
        return NextResponse.json({ success: false, msg: "Server Error" })
    }
}

