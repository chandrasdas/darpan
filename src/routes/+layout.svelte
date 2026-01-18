<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import ErrorHandler from '$lib/ErrorHandler.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ErrorHandler />

{@render children()}
