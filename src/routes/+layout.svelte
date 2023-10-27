<script lang="ts">
	const modules = import.meta.glob('./**/**+page*.svelte');
	import ThemeSwitch from '$component/ThemeSwitch.svelte';
	import '$main/app.css';
	import '$main/style.scss';

	const paths = new Map();
	for (const path in modules) {
		const stringToRemove = new RegExp(/\/\+page(?:\..+)?\.svelte/g);
		const link = path.replace('./', '/').replace(stringToRemove, '');
		const name = link.slice(1, link.length);

		paths.set(link, name);
	}
</script>

<header class="sticky top-0 p-4 shadow-lg bg-secondary text-secondary-foreground">
	<nav class="flex">
		<span class="flex gap-6">
			<a class="hover:underline" href="/">home</a>
			<ThemeSwitch />
		</span>
		<div class="flex justify-end w-full gap-6">
			{#each paths as path}
				<a class="hover:underline" href={path[0]}>{path[1]}</a>
			{:else}
				did not find any routes...
			{/each}
		</div>
	</nav>
</header>

<main class="flex items-center justify-center min-h-screen">
	<slot />
</main>

<footer class="flex justify-center gap-6 p-4 shadow-inner bg-secondary text-secondary-foreground">
	{#each paths as path}
		<a class="hover:underline" href={path[0]}>{path[1]}</a>
	{:else}
		did not find any routes...
	{/each}
</footer>
