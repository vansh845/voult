'use client'
import prisma from "@/lib/db"
import { useMutation, useQuery } from "@tanstack/react-query"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { MoreVertical } from "lucide-react"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"

type PostType = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
}

export default function PostContainer({ post }: { post: PostType }) {
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();
    const mutation = useMutation({
        mutationFn: async () => {
            await axios.delete('/api/posts', { data: { id: post.id } });
            router.refresh()

        }
    })


    const handleClick = async () => {
        setLoading(true)
        const promise = new Promise((res) => {
            setTimeout(() => {
                res('resolved')
            }, 3400);
        })
        mutation.mutate();
        await promise
        setLoading(false)
    }


    return (
        <div className="flex justify-between text-sm font-normal md:text-md  rounded-md border items-center p-5 mb-3 border-slate-800  ">
            <div>{post.title}</div>
            <div>
                <Dialog>
                    <AlertDialog>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus:outline-none">{isLoading ? <Loader2 className="mr-1 animate-spin" /> : <MoreVertical className="h-4 md:h-5"/>}</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DialogTrigger asChild><DropdownMenuItem>View</DropdownMenuItem></DialogTrigger>
                                
                                <AlertDialogTrigger asChild>
                                    <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                                </AlertDialogTrigger>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{post.title}</DialogTitle>
                            </DialogHeader>
                            <DialogDescription>{post.content}</DialogDescription>
                        </DialogContent>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure about that?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This will delete the post permenantly
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </Dialog>


            </div>
        </div>
    )
}