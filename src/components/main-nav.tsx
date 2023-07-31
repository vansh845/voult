'use client'
import * as React from "react"
import Link from "next/link"
import { UserButton, useUser } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"

export function MainNav() {
    const { isLoaded, isSignedIn, user } = useUser()
    return (
        <NavigationMenu className="sticky top-0 z-40 border-b bg-background">
            <NavigationMenuList className="flex w-screen justify-between p-4">
                <div className="flex">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Documentation
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Pricing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </div>
                <div className="flex justify-between items-center">
                    {isLoaded ? isSignedIn ? <DashButton /> : '' : ''}
                    {isLoaded ? isSignedIn ? <UserButton /> : <Link href='/sign-in'><Button variant={'outline'}>Login</Button></Link> : <Skeleton className="h-10 w-10 rounded-full" />}
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export function DashButton() {
    return (
        <NavigationMenuItem>
            <Link href="/dashboard" legacyBehavior passHref>
                <Button className="mr-2" variant='ghost'>DashBoard</Button>
            </Link>
        </NavigationMenuItem>
    )
}