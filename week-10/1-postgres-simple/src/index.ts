import { Client } from 'pg' // Widely used library for postgres usage in express
import { DB_URL } from './config';
import { createTables } from './db/setup';
export const client = new Client({
    connectionString: DB_URL
});

type NumberOrBoolean = number | boolean;
type NumberOrStringOrBoolean = number | string | boolean;

var x: NumberOrBoolean = 1;
var y: NumberOrBoolean = true;
var z: NumberOrStringOrBoolean = 1; // Use any number, string, or boolean

client.connect();

createTables();
