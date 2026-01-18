import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		// For testing: accept any username and password
		if (username && password) {
			throw redirect(303, '/dashboard');
		}

		return {
			error: 'Invalid credentials'
		};
	}
} satisfies Actions;
