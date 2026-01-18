import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { env } from '$env/dynamic/private';
import * as schema from './schema';

// Validate environment variables
const validateEnv = () => {
	const required = ['DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME'];
	const missing = required.filter((key) => !env[key as keyof typeof env]);

	if (missing.length > 0) {
		throw new Error(
			`Missing database environment variables: ${missing.join(', ')}. ` +
				`Please check your .env file.`
		);
	}
};

validateEnv();

// Create a connection pool for better performance
const poolConnection = mysql.createPool({
	host: env.DB_HOST || 'rkmvvmmalda.org',
	port: Number(env.DB_PORT) || 3306,
	user: env.DB_USER,
	password: env.DB_PASS,
	database: env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
	enableKeepAlive: true,
	keepAliveInitialDelay: 0
});

// Test the connection on startup
poolConnection
	.getConnection()
	.then((conn) => {
		console.log('✓ Database connection established successfully');
		conn.release();
	})
	.catch((err) => {
		console.error('✗ Database connection failed:', err.message);
		console.error('  Host:', env.DB_HOST);
		console.error('  Database:', env.DB_NAME);
	});

// Add error listener to pool
poolConnection.on('error' as any, (err: any) => {
	console.error('Database pool error:', err);
});

export const db = drizzle(poolConnection, { schema, mode: 'default' });
