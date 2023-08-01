import Editor from "@/components/editor";
import { Toaster } from "@/components/ui/toaster";

export default async function EditorPage(){

    return(
        <div>
            <Editor />
            <Toaster/>
        </div>
    )
}