import { Pool } from "pg";


const connectionString = 'your URL DATABASE here';

const db = new Pool({ connectionString });


export default db;