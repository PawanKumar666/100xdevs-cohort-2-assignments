import { Client } from 'pg' // Widely used library for postgres usage in express
import { DB_URL } from './config';
import { createTables } from './db/setup';

/*
TODO:
- Create a new table called "Clients" with the following columns:
    - id: SERIAL PRIMARY KEY
    - Account name: VARCHAR(255) NOT NULL
    - password: VARCHAR(255) NOT NULL
*/
console.log(DB_URL);
export const client = new Client({
    connectionString: DB_URL
});

client.connect();

createTables();
