import { client } from "~/supa-client";

export const getTechStacks = async()=>{
    const {data, error} = await client.from("user_available_tasks").select("*")
    if(error) throw new Error(error.message);
    return data;
}