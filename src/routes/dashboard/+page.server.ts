import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { students } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ request }) => {
	try {
		// Fetch student data from database
		const studentData = await db
			.select({
				id: students.id,
				name: students.name,
				class: students.class,
				rollNo: students.rollNo
			})
			.from(students);

		return {
			message: 'Welcome to the dashboard!',
			students: studentData,
			error: null
		};
	} catch (error) {
		console.error('Database connection error:', error);
		return {
			message: 'Welcome to the dashboard!',
			students: [],
			error: 'Database not connected. Please check your database configuration.'
		};
	}
};
