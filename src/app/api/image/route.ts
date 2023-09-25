import path from "path";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import { existsSync } from "fs";

// export const config = {
//     api: {
//         bodyParser: true,
//     },
// };


export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const f = formData.get("file");

        if (!f) {
            return NextResponse.json({}, { status: 400 });
        }

        const file = f as File;

        const destinationDirPath = path.join(process.cwd(), "public/uploads");

        if (!existsSync(destinationDirPath)) {
            fs.mkdir(destinationDirPath, { recursive: true });
        }

        const fileArrayBuffer = await file.arrayBuffer();

        await fs.writeFile(
            path.join(destinationDirPath, +Date.now() + "-" + file.name),
            Buffer.from(fileArrayBuffer)
        );

        return NextResponse.json({
            fileName: file.name,
            size: file.size,
            lastModified: new Date(file.lastModified),
        }, { status: 200 });


    } catch (error) {

        return NextResponse.json({
            message: "failed"
        }, { status: 500 })

    }
}


export async function GET() {
    const data = await fs.readdir(path.join(process.cwd(), "public/uploads"))
    return NextResponse.json({
        data
    }, { status: 200 });
}