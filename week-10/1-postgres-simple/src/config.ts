import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.POSTGRES_URL;