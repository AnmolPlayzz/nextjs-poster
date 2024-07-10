import styles from "./post-list.module.css"
import {fetchPosts} from "@/lib/posts";
import Post from "@/components/post";
export default async function PostList() {
    const posts : any = await fetchPosts();
    return (
        <div className={styles.postList}>
            {posts.map((post: {
                id: number;
                author: string;
                body: string;
            }): React.ReactNode => (
                <Post key={post.id} {...post}  />
            ))}
        </div>
    )
}