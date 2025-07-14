import db from "~/db"
import { scenarios } from "../scenarios/schema"

export const getScenarios = async()=>{
    const allscenarios = await db.select({
        name : scenarios.name,
    }).from(scenarios);
    return allscenarios;
}