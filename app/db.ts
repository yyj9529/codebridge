import { drizzle } from "drizzle-orm/postgres-js";
//import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!,{prepare : false});

 const db = drizzle(client);

//const db = drizzle(process.env.DATABASE_URL!);
export default db;


