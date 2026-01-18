<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4"
>
	<div class="max-w-2xl w-full">
		{#if $page.status === 404}
			<div class="bg-white rounded-lg shadow-xl p-8">
				<div class="text-center mb-6">
					<h1 class="text-6xl font-bold text-red-600 mb-2">404</h1>
					<h2 class="text-2xl font-semibold text-gray-800">Page Not Found</h2>
				</div>
				<p class="text-gray-600 text-center mb-6">The page you're looking for doesn't exist.</p>
				<div class="flex justify-center gap-4">
					<a href="/" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
						Go Home
					</a>
				</div>
			</div>
		{:else}
			<div class="bg-white rounded-lg shadow-xl p-8 border-l-4 border-red-600">
				<div class="mb-6">
					<h1 class="text-3xl font-bold text-red-600 mb-2">Error</h1>
					<p class="text-gray-600">Status: {$page.status || 500}</p>
				</div>

				{#if $page.error?.message}
					<div class="mb-6">
						<h2 class="text-xl font-semibold text-gray-800 mb-2">Message:</h2>
						<p class="text-lg text-red-700 font-mono bg-red-50 p-4 rounded border border-red-200">
							{$page.error.message}
						</p>
					</div>
				{/if}

				{#if $page.error && 'details' in $page.error}
					<div class="mb-6">
						<h2 class="text-xl font-semibold text-gray-800 mb-2">Details:</h2>
						<pre class="bg-gray-900 text-gray-100 p-4 rounded overflow-auto text-sm max-h-96">{$page
								.error.details}</pre>
					</div>
				{/if}

				{#if $page.error && 'errorId' in $page.error}
					<div class="mb-6 p-4 bg-gray-50 rounded border border-gray-200">
						<p class="text-sm text-gray-600">
							<span class="font-semibold">Error ID:</span>
							{$page.error.errorId}
						</p>
						{#if 'timestamp' in $page.error}
							<p class="text-sm text-gray-600">
								<span class="font-semibold">Time:</span>
								{$page.error.timestamp}
							</p>
						{/if}
						{#if 'url' in $page.error}
							<p class="text-sm text-gray-600 break-all">
								<span class="font-semibold">URL:</span>
								{$page.error.url}
							</p>
						{/if}
					</div>
				{/if}

				<div class="flex justify-center gap-4">
					<button
						onclick={() => (window.location.href = '/')}
						class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
					>
						Go Home
					</button>
					<button
						onclick={() => window.location.reload()}
						class="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
					>
						Retry
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>
