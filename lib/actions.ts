"use server"
import {post} from "@/lib/posts";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function postContent(prevState: {
    message: string | null
}, formData:any):Promise<any> {
    const author: string | null | undefined = formData.get("name")
    const body: string | null | undefined = formData.get("body")

    function checkValidity(txt: string | null | undefined): boolean | undefined {
        if (typeof txt === "string") {
            return txt.trim().length > 0;
        } else if (typeof txt === 'undefined' || txt === null) {
            return false;
        }
    }
    if (!checkValidity(author)) {
        return {
            message: "Please input an \'author\'."
        }
    } else if (!checkValidity(body)) {
        return {
            message: "Please input a \'body\'."
        }
    } else if (typeof body === "string" && typeof author === "string") {
        if (author.length > 20) {
            return {
                message: "Author exceeds 20 character limit."
            }
        } else if (body.length > 350) {
            return {
                message: "Author exceeds 350 character limit."
            }
        }
    }
    const data : { author: string | null | undefined; body: string | null | undefined } = {
        author,
        body
    }

    await post(data)

    revalidatePath("/")
    revalidatePath("/[id]","page")
    redirect("/")
}