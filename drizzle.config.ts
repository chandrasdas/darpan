import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'mysql',
	schema: './src/lib/server/db/schema.ts', // verify your schema path
	dbCredentials: {
		host: '127.0.0.1',
		port: 3307, // The tunnel port you just tested
		user: 'rkmvvmm1_tuser',
		password: 'Test%2026',
		database: 'rkmvvmm1_test2026'
	}
});
