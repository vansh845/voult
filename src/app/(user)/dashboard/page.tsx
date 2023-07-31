import { Button } from "@/components/ui/button"
import Nopost from "@/components/no-posts"
import Link from 'next/link'
import {PlusIcon} from "@radix-ui/react-icons"

export default function DashBoard() {
    return (
        <div>
            <div className="px-20 py-10 flex w-screen items-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl grow">
                    Posts
                </h1>
                <Link href='/editor'><Button className="flex justify-between "><PlusIcon className="mr-1"/> <p>New Post</p></Button></Link>
            </div>
                <div>
                    <Nopost />
                </div>
        </div>
    )
}