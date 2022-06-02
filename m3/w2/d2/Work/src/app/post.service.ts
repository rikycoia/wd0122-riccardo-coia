import { Post } from "./post";

export async function getPosts():Promise<Post>{
  return (await fetch("assets/db.json")).json()
}
