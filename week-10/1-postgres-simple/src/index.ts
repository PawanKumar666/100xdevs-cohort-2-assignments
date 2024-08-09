import { Client } from 'pg' // Widely used library for postgres usage in express
import { DB_URL } from './config';

export const client = new Client({
    connectionString: DB_URL
});
