import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

// Create a connection pool for better performance
const poolConnection = mysql.createPool({
	host: env.DB_HOST || 'rkmvvmmalda.org',
	port: Number(env.DB_PORT) | 3306,
	user: env.DB_USER,
	password: env.DB_PASS,
	database: env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

export const db = drizzle(poolConnection, { schema, mode: 'default' });
