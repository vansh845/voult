import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { auth } from '@clerk/nextjs'

const prisma = new PrismaClient();

type deleteId = {
    id: number
}

export async function PATCH(request: Request) {
    try {

        const body = await request.json()
        const posts = await prisma.post.findUnique({
            where: {
                id: body.params.id
            }
        })
        return NextResponse.json(posts)
    } catch (error) {
        return NextResponse.json({ success: false, message: 'get failed' })
    }
}

export async function POST(request: Request) {
    try {
        const {userId} = auth() ;
        console.log(userId)
        if(!userId){
            return NextResponse.json({message:'Unauthorized'})
        }
        const body = await request.json()
        console.log(body.PostData)
        const user = await prisma.post.create({
            data:{
                authorid:userId,
                title:body.PostData.title,
                content:body.PostData.content
            }
        })
        console.log(user)
        return NextResponse.json({ sucess: true, message: 'it worked' })

    } catch (error) {
        return NextResponse.json({message:error,success:false})
    }
}

export async function DELETE(request: Request) {
    console.log("hello")
    try {
        const body = await request.json() as deleteId;
        console.log(body)
        await prisma.post.delete({
            where: {
                id: body.id
            }
        })
        return NextResponse.json({ sucess: true, message: 'deleted from db' })
    } catch (error) {
        return NextResponse.json({ success: false, message: error })
    }


}