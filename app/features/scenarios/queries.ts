export const getTechStacks = async()=>{
    const {data, error} = await client.from("techstacks").select("techstack_id, techName, role_id")
    if(error) throw new Error(error.message);
    return data;
}