import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config()

const client = new Client({
    connectionString: process.env.connectionString
})
console.log(process.env.connectionString)
async function createTable() {
    await client.connect(); 
    const res = await client.query(`
        CREATE TABLE CLIENTS (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(50) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
}
createTable();
