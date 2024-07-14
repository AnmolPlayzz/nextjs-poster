import styles from "./post.module.css"
import Link from "next/link";
import TransitionLink from "./utils/transition-link";

interface postData {
    id: number,
    author: string,
    body: string,
    key: number
}

export default function Post(props: postData): React.ReactNode {
    return <TransitionLink href={`/${props.id}`} className={styles.post}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.body}>{props.body}</p>
    </TransitionLink>
}