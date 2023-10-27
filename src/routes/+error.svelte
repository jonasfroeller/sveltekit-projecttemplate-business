<script lang="ts">
	import { page } from '$app/stores';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<section class="flex flex-col items-center justify-center text-center h-screen">
	<h1 class="text-8xl">{$page.status} {$page?.error?.message}</h1>
	<p class="text-4xl text-primary mb-4">Pfad: {$page.url.pathname}</p>
	<a href="/" class={buttonVariants({ variant: 'outline' })}> Home </a>
</section>
