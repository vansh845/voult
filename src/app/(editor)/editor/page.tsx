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
    const [isLoading,setLoading] = useState(false);
    const mutation = useMutation({
        mutationFn: async () => {
            
            if (PostData.title !== '') {
                axios.post('/api/posts', PostData)
                setPostData({ ...PostData, title: '', content: '' });

            }
            else {
                toast({ title: 'write something...' })
            }

        }
    })
    async function handleClick() {
        setLoading(true)
        const pr = new Promise((res)=>{
            setTimeout(() => {
                res('resolved')
            }, 1200);
        })
        await pr
        setLoading(false)

        mutation.mutate()
        toast({ title: 'Post saved...' })
        router.refresh()
    }

    return (
            <div className="px-20 py-10 overflow-hidden">
                <div className="flex w-full justify-between">
                    <Button onClick={()=>router.push('/dashboard')} variant={'ghost'}><ChevronLeftIcon className="mr-1" />Back</Button>
                    <Button onClick={handleClick} variant={'default'}>{isLoading ? <Loader2 className="animate-spin mr-1" /> : ''}Save</Button>
                </div>
                <div>
                    <div className="grid w-full gap-1.5 mx-96 my-20 overflow-hidden">
                        <Input id="title" className="max-w-2xl" placeholder="Title" value={PostData.title} onChange={e => setPostData({ ...PostData, title: e.target.value })}></Input>
                        <br />
                        <Textarea id="content" className="resize-none" placeholder="enter text" value={PostData.content} onChange={e => setPostData({ ...PostData, content: e.target.value })} />
                    </div>
                </div>
            </div>
    )
}