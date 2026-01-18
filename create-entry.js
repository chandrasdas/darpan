// create-entry.js
import fs from 'fs';
import path from 'path';

// Define the content of your cPanel entry file
const content = `
async function loadApp() {
    await import('./index.js');
}
loadApp();
`;

// Path to your build folder (usually 'build' for SvelteKit)
const buildDir = path.join(process.cwd(), 'build');

// Create the app.cjs file
try {
	fs.writeFileSync(path.join(buildDir, 'app.cjs'), content);
	console.log('Successfully created app.cjs in build folder');
} catch (err) {
	console.error('Error creating app.cjs:', err);
}
