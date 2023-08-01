import { NextResponse } from 'next/server'
import  prisma  from '../../../lib/db'
export async function POST(request: Request) {
    try {
        const body = await request.json()
        await prisma.posts.create({
            data: {
                title: body.title,
                content: body.content
            }
        })
        return NextResponse.json({sucess:true,message:'it worked'})

    } catch (error) {
        console.log(error)
    }
}