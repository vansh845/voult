import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export default function LoadingDashBoard() {
    return (
        <div className="overflow-x-hidden">
            <div className="px-20 py-10 flex w-screen items-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl grow">
                    Posts
                </h1>
                <Link href='/editor'><Button className="flex justify-between" variant={'default'}><PlusIcon className="mr-1" />New Post</Button></Link>
            </div>
            <div className="flex-col m-10">

                <Skeleton className="mx-20 mt-5 w-1/2 p-5  min-h-20" />
                <Skeleton className="mx-20 mt-5 w-1/2 p-5  min-h-20" />
                <Skeleton className="mx-20 mt-5 w-1/2 p-5  min-h-20" />
            </div>
        </div>
    )
}