import { ProductData } from "@/databasedata";
import { NextResponse } from "next/server";




export async  function GET(req, res) {
    
    const data = await ProductData()
    return NextResponse.json({
        data
    })
}







