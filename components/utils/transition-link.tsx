"use client"
import Link, {LinkProps} from "next/link"
import React, { useEffect, ReactNode, useContext } from "react"
import { usePathname, useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { TransitionContext } from "@/lib/context/transition-context"
interface Props extends LinkProps {
    children: React.ReactNode,
    href: string,
    className: string
}

function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve,ms))
}

export default function TransitionLink({
    children,
    href,
    ...props
}:Props): ReactNode {
    const data = useContext(TransitionContext)
    
    const router: AppRouterInstance = useRouter();
    const pathname = usePathname()
    useEffect(() => {
        wait(500).then(() => {
            data.setVal("")
        })
    }, [pathname]);
    console.log(router)
    async function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        data.setVal("page-transition");
        await wait(500);
        router.push(href);
    }
    return <Link 
        onClick={handleClick}
        href={href}
        {...props}
    >{children}</Link>
}