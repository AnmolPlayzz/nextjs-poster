import styles from "./post.module.css"
import Link from "next/link";

interface postData {
    id: number,
    author: string,
    body: string,
    key: number
}

export default function Post(props: postData): React.ReactNode {
    return <Link href={`/${props.id}`} className={styles.post}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.body}>{props.body}</p>
    </Link>
}