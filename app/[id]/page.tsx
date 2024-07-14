import type { Metadata } from "next";
import {getPost} from "@/lib/posts";
import styles from "./page.module.css"
import {MdArrowBack} from "react-icons/md";
import {notFound} from "next/navigation";
import TransitionLink from "@/components/utils/transition-link";
export const metadata: Metadata = {
    title: "Post Details",
};
export default async function Page({params}: {params: {id: string}}) {
    const id = Number(params.id)
    console.log(id, typeof id)
    if (isNaN(id)) {
        notFound()
    }

    const postData =  await getPost(id);
    if (!postData) {
        notFound()
    }
    console.log(postData)
    return <main className={styles.main}>
        <TransitionLink href="/" className={styles.backlink}>
            <MdArrowBack className={styles.svg} />
            Back
        </TransitionLink>
        <div className={styles.div}>
            <p className={styles.author}>{postData.author}</p>
            <p>{postData.body}</p>
        </div>
    </main>
}