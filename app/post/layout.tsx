import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Create new Post",
};
export default function Layout({children}: {
    children: React.ReactNode
}): React.ReactNode {
    return <>
        {children}
    </>
}