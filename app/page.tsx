import type { Metadata } from "next";
import { MdPostAdd } from "react-icons/md";
import styles from "./page.module.css"
import PostList from "@/components/post-list";
import TransitionLink from "@/components/utils/transition-link";
export const metadata: Metadata = {
    title: "NextJS Poster",
    description: "Post stuff anonymously.",
};
export default function Page() {
    return <main className={styles.main}>
        <TransitionLink href="/post" className={styles.addNewPost}>
            <MdPostAdd className={styles.svg}/>
            New Post
        </TransitionLink>
        <div className={styles.posts}>
            <PostList />
        </div>
    </main>
}