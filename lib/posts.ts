"use server";
import { sql } from "@vercel/postgres";
import {QueryResultRow} from "pg";

export async function fetchPosts():Promise<{
    id: number,
    author: string,
    body: string,
}[]> {
    const posts:any = await sql`SELECT * FROM postsdb1;`;
    return posts.rows.reverse()
}


export async function getPost(id: number):Promise<QueryResultRow> {
    const post = await sql`SELECT * FROM postsdb1 WHERE id=${id};`;
    return post.rows[0]
}