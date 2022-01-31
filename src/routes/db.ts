import { Pool } from "pg";


const connectionString = 'seu banco aqui';

const db = new Pool({ connectionString });


export default db;