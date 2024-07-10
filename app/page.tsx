import { MdPostAdd } from "react-icons/md";
import styles from "./page.module.css"
import Link from "next/link";
import PostList from "@/components/post-list";
export default function Page() {
    return <main className={styles.main}>
        <Link href="/post" className={styles.addNewPost}>
            <MdPostAdd className={styles.svg}/>
            New Post
        </Link>
        <div className={styles.posts}>
            <PostList />
        </div>
    </main>
}