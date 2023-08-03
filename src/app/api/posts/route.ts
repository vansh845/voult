import { NextResponse } from 'next/server'
import prisma from '../../../lib/db'

type deleteId = {
    id:number
}

export async function PATCH(request:Request){
    try {
        
        const body = await request.json()
        const posts = await prisma.posts.findUnique({
            where:{
                id: body.params.id
            }
        })
        return NextResponse.json(posts)
    } catch (error) {
        return NextResponse.json({success : false, message: 'get failed'})
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()

        await prisma.posts.create({
            data: {
                title: body.title,
                content: body.content
            }
        })
        return NextResponse.json({ sucess: true, message: 'it worked' })

    } catch (error) {
        console.log(error)
    }
}

export async function DELETE(request: Request) {
    console.log("hello")
    try {
        const body = await request.json() as deleteId;
        console.log(body)
        await prisma.posts.delete({
            where: {
                id: body.id
            }
        })
        return NextResponse.json({sucess:true,message:'deleted from db'})
    } catch (error) {
        return NextResponse.json({success:false,message:error})
    }


}