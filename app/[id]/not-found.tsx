import styles from "./not-found.module.css"

export default function NotFound() {
    return <main className={styles.main}>
        <div className={styles.div}>
            <h1 className={styles.h1}>404 - Not found</h1>
            <p className={styles.p}>We couldn't find any post going by the entered ID.</p>
        </div>
    </main>
}