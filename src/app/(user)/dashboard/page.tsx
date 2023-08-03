import { Button } from "@/components/ui/button"
import Nopost from "@/components/no-posts"
import Link from 'next/link'
import { PlusIcon } from "@radix-ui/react-icons"
import PostContainer from "@/components/post-container"
import prisma from "@/lib/db"

export default async function DashBoard() {

    const posts = await prisma.posts.findMany();



    return (
        <div className="overflow-x-hidden">
            <div className="px-20 py-10 flex w-screen items-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl grow">
                    Posts
                </h1>
                <Link href='/editor'><Button className="flex justify-between" variant={'default'}><PlusIcon className="mr-1"/>New Post</Button></Link>
            </div>
            <div className="flex-col m-10">

                {posts.length !== 0 ? posts.map(post => <PostContainer key={post.id} post={post} />) : <Nopost />}
            </div>
        </div>

    )
}

