"use server"
import {post} from "@/lib/posts";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {headers} from "next/headers";
import { redis } from "@/lib/redis";
import {Ratelimit} from "@upstash/ratelimit";

const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(1,"1m")
})

export async function postContent(prevState: {
    message: string | null
}, formData:any):Promise<any> {
    const ip: any = headers().get("x-forwarded-for");
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

    const { success}: {success: boolean} = await rateLimit.limit(ip)
    if (!success) {
        return {
            message: `You can only post one message per minute, please wait. Spamming the post button will result in more wait times.`,
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