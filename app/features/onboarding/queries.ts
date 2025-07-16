import db from "~/db";
import { roles, techstacks } from "../users/schema";
import { eq, isNull, and } from "drizzle-orm";
import { client } from "~/supa-client";

// export const getRoles = async()=>{
//     const allRoles = await db.select({
//         role_id: roles.role_id,
//         roleName: roles.name,
//     }).from(roles)
//     .where(and(isNull(roles.deleted_at)))
//     return allRoles;
// }

// export const getTechStacks = async()=>{
//     const allTechStacks = await db.select({
//         techstack_id: techstacks.techstack_id,
//         techName: techstacks.name,
//         role_id: techstacks.role_id,
//     }).from(techstacks)
//     .where(isNull(techstacks.deleted_at))
//     return allTechStacks;
// }

export const getRoles = async()=>{
   const {data, error} = await client.from("roles").select("role_id, roleName")
   if(error) throw error;
   return data;
}

export const getTechStacks = async()=>{
    const {data, error} = await client.from("techstacks").select("techstack_id, techName, role_id")
    if(error) throw new Error(error.message);
    return data;
}