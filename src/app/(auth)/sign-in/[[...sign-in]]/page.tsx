import { SignIn } from "@clerk/nextjs";
import {dark} from '@clerk/themes'

export default async function Page() {


  return(
    <div className="flex justify-center items-center h-screen">
        <SignIn redirectUrl={'/dashboard'} appearance={{baseTheme:dark}} />
    </div>
    
  )
}