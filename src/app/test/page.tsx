'use client'

import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export default function Test(){
    const { toast } = useToast()
    return (
        <Button variant={'outline'} onClick={()=>{toast({title:'fuck you'})}}>click me please!!!</Button>
    )
}