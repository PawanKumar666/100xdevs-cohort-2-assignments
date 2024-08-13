import { Client } from 'pg' // Widely used library for postgres usage in express
import { DB_URL } from './config';
import { createTables } from './db/setup';
export const client = new Client({
    connectionString: DB_URL
});

type NumberOrBoolean = number | boolean;

var x: NumberOrBoolean = 1;
var y: NumberOrBoolean = true;

client.connect();

createTables();
