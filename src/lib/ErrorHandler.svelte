<script lang="ts">
	import { onMount } from 'svelte';

	let errorMessage = '';
	let showError = false;

	onMount(() => {
		// Capture unhandled promise rejections
		window.addEventListener('unhandledrejection', (event) => {
			console.error('Unhandled promise rejection:', event.reason);
			errorMessage = `Unhandled Error: ${event.reason?.message || String(event.reason)}`;
			showError = true;
		});

		// Capture global errors
		window.addEventListener('error', (event) => {
			console.error('Global error:', event.error);
			errorMessage = `Error: ${event.error?.message || event.message}`;
			showError = true;
		});
	});
</script>

{#if showError && errorMessage}
	<div
		class="fixed bottom-4 right-4 max-w-sm bg-red-100 border-l-4 border-red-600 p-4 rounded shadow-lg z-50"
	>
		<div class="flex justify-between items-start">
			<div>
				<p class="text-red-800 font-semibold">Error</p>
				<p class="text-red-700 text-sm mt-1 font-mono">{errorMessage}</p>
			</div>
			<button
				on:click={() => (showError = false)}
				class="text-red-600 hover:text-red-800 ml-4 font-bold text-lg"
			>
				×
			</button>
		</div>
	</div>
{/if}
