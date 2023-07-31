import { FileTextIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"
import Link from 'next/link'
import {PlusIcon} from "@radix-ui/react-icons"

export default function Nopost() {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mx-20 ">
            <FileTextIcon className="h-16 w-16"/>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                You don't have any posts yet.
            </h3>
            <br />
            <p className="text-sm text-muted-foreground">
                Create one
            </p>
            <br />
            <Link href='/editor'><Button className="flex justify-between "><PlusIcon className="mr-1"/> <p>New Post</p></Button></Link>
        </div>
    )
}