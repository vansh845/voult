import { FileTextIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import Link from 'next/link'
import {PlusIcon} from "@radix-ui/react-icons"

export default function Nopost() {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed px-8 md:px-16 lg:px-32 text-center ">
            <FileTextIcon className="h-8 w-8 md:h-16 md:w-16"/>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                You do not have any posts yet.
            </h3>
            <br />
            <p className="text-sm text-muted-foreground">Create one</p>
            <br />
            <Link href='/editor'><Button className="flex justify-between items-center"><PlusIcon className="mr-1"/>New Post</Button></Link>
        </div>
    )
}