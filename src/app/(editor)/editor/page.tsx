'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from 'lucide-react'
import axios from "axios";


export default function Editor() {

    const router = useRouter();
    const { toast } = useToast();
    const [PostData, setPostData] = useState({ title: 'Untitled', content: '' });
    const [isLoading, setLoading] = useState(false);
    const mutation = useMutation({
        mutationFn: async () => {

            if (PostData.title !== '') {
                const post = await axios.post('/api/posts', {PostData})
                setPostData({ ...PostData, title: '', content: '' });
                console.log(post)
            }
            else {
                toast({ title: 'write something...' })
            }

        }
    })
    async function handleClick() {
        setLoading(true)
        mutation.mutate()
        const pr = new Promise((res) => {
            setTimeout(() => {
                res('resolved')
            }, 1000);
        })
        await pr
        setLoading(false)

        toast({ title: 'Post saved...' })
        router.refresh()
    }

    return (
        <div className="px-8 md:px-16 lg:px-32">
            <div className="flex justify-between items-center py-8">
                <Button onClick={() => router.push('/dashboard')} variant={'ghost'}><ChevronLeftIcon className="mr-1" />Back</Button>
                <Button onClick={handleClick} variant={'default'} className="h-8 md:h-9">{isLoading ? <Loader2 className="animate-spin mr-1" /> : ''}Save</Button>
            </div>
            <div>
                <div className="flex-col">
                    <Input id="title" className="max-w-2xl bg-inherit" placeholder="Title" value={PostData.title} onChange={e => setPostData({ ...PostData, title: e.target.value })}></Input>
                    <br />
                    <Textarea id="content" className="resize-none w-full" placeholder="enter text" value={PostData.content} onChange={e => setPostData({ ...PostData, content: e.target.value })} />
                </div>
            </div>
        </div>
    )
}