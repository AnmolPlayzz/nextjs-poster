import { getPost } from "@/lib/posts";
import styles from "./page.module.css"
import Link from "next/link";
import {MdArrowBack} from "react-icons/md";
export default async function Page({params}: {params: {id: string}}) {
    const id = Number(params.id)
    const postData =  await getPost(id);
    return <main className={styles.main}>
        <Link href="/" className={styles.backlink}>
            <MdArrowBack />
            Back
        </Link>
        <div>
            <p className={styles.author}>{postData.author}</p>
            <p>{postData.body}</p>
        </div>
    </main>
}