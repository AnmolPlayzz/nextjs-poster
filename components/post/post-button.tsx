import styles from "./post-button.module.css";
import {MdAdd} from "react-icons/md";
import { useFormStatus } from "react-dom"

export default function PostButton(): React.ReactNode {
    const { pending } = useFormStatus();
    return <button disabled={pending} className={styles.button} type="submit">
        <MdAdd className={styles.svgAdd}/>
        {pending ? "Posting..." : "Post" }
    </button>
}