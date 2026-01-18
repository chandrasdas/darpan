<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="p-8">
	<h1 class="text-3xl font-bold mb-4">{data.message}</h1>
	<h2 class="text-2xl font-bold mb-6">Welcome to school Dashboard</h2>

	{#if data.error}
		<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
			<p class="font-bold">Error</p>
			<p>{data.error}</p>
		</div>
	{:else}
		<div class="overflow-x-auto">
			<table class="min-w-full border-collapse border border-gray-300">
				<thead class="bg-gray-200">
					<tr>
						<th class="border border-gray-300 px-4 py-2 text-left">ID</th>
						<th class="border border-gray-300 px-4 py-2 text-left">Name</th>
						<th class="border border-gray-300 px-4 py-2 text-left">Class</th>
						<th class="border border-gray-300 px-4 py-2 text-left">Roll No</th>
					</tr>
				</thead>
				<tbody>
					{#each data.students as student (student.id)}
						<tr class="hover:bg-gray-50">
							<td class="border border-gray-300 px-4 py-2">{student.id}</td>
							<td class="border border-gray-300 px-4 py-2">{student.name}</td>
							<td class="border border-gray-300 px-4 py-2">{student.class}</td>
							<td class="border border-gray-300 px-4 py-2">{student.rollNo}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
