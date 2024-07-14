"use client"
import { TransitionContext } from "@/lib/context/transition-context";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { MdMessage } from "react-icons/md";
import Providers from "@/components/post/ProgressBarProvider";
import TransitionLink from "@/components/utils/transition-link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname()
  const [classes,setClasses] = useState("")
  return (
    <html lang="en">
      <body className={roboto.className}>
      <svg id="Layer_2" className="bg-image" viewBox="0 0 527.26 395.7" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <linearGradient id="linear-gradient" x1="33.39" y1="-32.39" x2="493.87" y2="428.09"
                          gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3d8a84"/>
            <stop offset="1" stopColor="#152136"/>
          </linearGradient>
          <radialGradient id="radial-gradient" cx="263.63" cy="199.55" fx="596.97" fy="-95.66" r="498.1"
                          gradientTransform="translate(0 0)" gradientUnits="userSpaceOnUse">
            <stop offset=".12" stopColor="#000" stopOpacity="0"/>
            <stop offset=".67" stopColor="#000"/>
          </radialGradient>
        </defs>
        <g id="Layer_2-2" data-name="Layer 2">
          <g>
            <rect className="cls-1" x="0" y=".01" width="526.26" height="394.7"/>
            <rect className="cls-2" width="526.27" height="394.71"/>
          </g>
        </g>
      </svg>
      <nav >
        <div className="main">
          <TransitionContext.Provider value={{
            setVal: setClasses
          }}>
            {path === "/" ? <Link href="/" className="header">
              <MdMessage className="icon"/>
              <h1>Next.JS Poster</h1>
            </Link> : <TransitionLink href="/" className="header">
              <MdMessage className="icon"/>
              <h1>Next.JS Poster</h1>
            </TransitionLink>}
          </TransitionContext.Provider>
          <div className="navlinks">
            <a href="https://github.com/AnmolPlayzz/nextjs-poster" target="_blank">GitHub</a>
          </div>
        </div>
      </nav>
      <Providers>
        <TransitionContext.Provider value={{
          setVal: setClasses
        }}>
          <div id="root" className={classes}>
            {children}
          </div>
        </TransitionContext.Provider>
      </Providers>
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
