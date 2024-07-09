import { MdPostAdd } from "react-icons/md";
import styles from "./page.module.css"
import Link from "next/link";
import Post from "@/components/post";
import PostList from "@/components/post-list";
export default function Page() {
    return <main className={styles.main}>
        {/**<Link href="/post" className={styles.addNewPost}>
            <MdPostAdd/>
            New Post
        </Link>**/}
        <div className={styles.posts}>
            <PostList />
        </div>
    </main>
}