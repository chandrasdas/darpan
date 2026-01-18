import type { Handle, HandleServerError } from '@sveltejs/kit';

// Global error handler to catch and log all errors
export const handleError: HandleServerError = async ({ error, event }) => {
	const errorId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

	// Log error details to console
	console.error(`[Error ${errorId}]`, error);
	console.error('Request URL:', event.url.toString());
	console.error('Request Method:', event.request.method);

	// Determine error message and details
	let message = 'An unexpected error occurred';
	let details = '';
	let statusCode = 500;

	if (error instanceof Error) {
		message = error.message;
		details = error.stack || '';

		// Handle database connection errors
		if (
			error.message.includes('ECONNREFUSED') ||
			error.message.includes('connect ECONNREFUSED') ||
			error.message.includes('getaddrinfo') ||
			error.message.includes('ETIMEDOUT')
		) {
			message = 'Database Connection Error';
			details = `Failed to connect to database: ${error.message}`;
		}
	}

	// Return error object that will be passed to error page
	return {
		message,
		details,
		statusCode,
		errorId,
		timestamp: new Date().toISOString(),
		url: event.url.toString()
	};
};

// Optional: Global request handler to catch errors during request processing
export const handle: Handle = async ({ event, resolve }) => {
	try {
		return await resolve(event);
	} catch (error) {
		console.error('Unhandled error in request:', error);
		throw error;
	}
};
