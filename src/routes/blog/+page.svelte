<script lang="ts">
	import { isPreviewing } from '@builder.io/sdk-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const canShowContent = data.content || isPreviewing();
</script>

{#if canShowContent}
	<section class="flex flex-col gap-4">
		{#each data?.content?.results ?? [] as result}
			<article class="p-2 rounded-lg bg-primary-foreground">
				<h2>{result?.data?.title}</h2>
				<p>{@html result?.data?.body}</p>
			</article>
		{:else}
			404 No Posts Found
		{/each}
	</section>
{:else}
	Content Not Found
{/if}
