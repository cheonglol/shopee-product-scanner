import postgres from "postgres";

const connectionString = process.env.SUPABASE_DATABASE_URL;
if (connectionString === undefined) {
  throw new Error("SUPABASE_DATABASE_URL must be defined");
}
const psql = postgres(connectionString);

export default psql;
