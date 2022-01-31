import { Pool } from "pg";


const connectionString = 'URL database here';

const db = new Pool({ connectionString });


export default db;