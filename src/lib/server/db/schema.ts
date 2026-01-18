import { mysqlTable, int, varchar, smallint } from 'drizzle-orm/mysql-core';

export const classes = mysqlTable('classes', {
	id: int().autoincrement().notNull(),
	name: varchar({ length: 15 }).notNull()
});

export const students = mysqlTable('students', {
	id: int().autoincrement().notNull(),
	name: varchar({ length: 80 }).notNull(),
	class: varchar({ length: 10 }).notNull(),
	rollNo: smallint('roll_no').notNull()
});
