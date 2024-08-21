import { NextResponse } from "next/server";
import path from 'path';
import fs from 'fs';

export async function GET(){
    const imagesDirectory = path.join(process.cwd(), 'public/images/carousel');
    const imageUris = fs.readdirSync(imagesDirectory).map(filename => `/images/carousel/${filename}`);
    return NextResponse.json({
        data: imageUris
    })

}