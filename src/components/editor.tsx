'use client'
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "./ui/use-toast"
import {Loader2} from 'lucide-react'
import axios from "axios";

export default function Editor() {
    const {toast} = useToast();
    const [PostData, setPostData] = useState({ title: 'Untitled', content: '' });
    const mutation = useMutation({
        mutationFn: async () => {
            if(PostData.title !== '' || PostData.content !== ''){
                axios.post('/api/posts', PostData)
            }
            else{
                toast({title:'write something...'})
            }
            
            setPostData({ ...PostData, title: '', content: '' });
        }
    })
    function handleClick(){
        mutation.mutate()
        toast({title:'Post saved...'})
    }

    return (
        <div className="px-20 py-10 overflow-hidden">
            <div className="flex w-full justify-between">
                <Link href={'/dashboard'}><Button  variant={'ghost'}><ChevronLeftIcon className="mr-1" />Back</Button></Link>
                <Button onClick={handleClick} variant={'default'}>{mutation.isLoading?<Loader2/>:''}Save</Button>
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