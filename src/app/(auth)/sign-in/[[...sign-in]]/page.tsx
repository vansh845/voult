import { SignIn } from "@clerk/nextjs";
import {dark} from '@clerk/themes'

export default function Page() {
  return(
    <div className="absolute inset-1/3 top-1/3">
        <SignIn redirectUrl={'/dashboard'} appearance={{baseTheme:dark}} />
    </div>
    
  )
}