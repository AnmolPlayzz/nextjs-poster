"use client";
import styles from "./page.module.css"
import Link from "next/link";
import { useFormState } from "react-dom";
import {MdArrowBack, MdInfo} from "react-icons/md";
import {postContent} from "@/lib/actions";
import PostButton from "@/components/post/post-button";

export default function Page() {
    const [currentResponse, formAction] = useFormState(postContent, {message: null})
    return <main className={styles.main}>
        <Link href="/" className={styles.backlink}>
            <MdArrowBack className={styles.svg}/>
            Back
        </Link>
        <form className={styles.form} action={formAction}>
            <div className={styles.column}>
                <p className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Your Name</label>
                    <input type="text" id="name" name="name" maxLength={20}  className={styles.input} required/>
                </p>
                <p className={styles.field}>
                    <label htmlFor="body" className={styles.label}>Body</label>
                    <textarea
                        id="body"
                        name="body"
                        maxLength={350}
                        rows={8}
                        className={styles.input}
                        required
                    ></textarea>
                </p>
            </div>
            {currentResponse.message ? <p className={styles.warning}>
                <MdInfo className={styles.svgWarning} size="20px" />
                <span className={styles.span}>{currentResponse.message}</span>
            </p>:null}
            <PostButton />
        </form>
    </main>
}