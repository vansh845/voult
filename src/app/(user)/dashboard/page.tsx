import { Button } from "@/components/ui/button"
import Nopost from "@/components/no-posts"
import Link from 'next/link'
import { PlusIcon } from "@radix-ui/react-icons"
import PostContainer from "@/components/post-container"
import {auth} from '@clerk/nextjs'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function DashBoard() {
    const {userId} = auth();
    if(!userId){
        return
    }

    const posts = await prisma.post.findMany({
        where:{
            authorid:userId
        }
    });

    return (
        <div className="px-8 md:px-16 lg:px-32 ">
            <div className="flex items-center py-8">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl grow">
                    Posts
                </h1>
                <Link href='/editor'><Button className="flex items-center rounded-full md:rounded-md justify-between" variant={'ghost'}><PlusIcon className="w-5 h-5"/><span className="hidden md:flex ml-1">New Post</span></Button></Link>
            </div>
            <div className="flex-col ">

                {posts.length !== 0 ? posts.map(post => <PostContainer key={post.id} post={post} />) : <Nopost />}
            </div>
        </div>

    )
}

