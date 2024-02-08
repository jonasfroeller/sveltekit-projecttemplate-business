<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Button } from '$component/ui/button';
	import { toast } from 'svelte-sonner';

	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-center min-h-screen">
	<h1 class="flex items-end font-bold text-8xl">Account Information</h1>

	<div class="pt-2 pb-4">
		<p class="text-4xl">User id: {data.userId}</p>
		<p class="text-4xl">Username: {data.username}</p>
	</div>
	<form method="post" action="?/logout" use:enhance>
		<input type="submit" value="Sign out" class={buttonVariants({ variant: 'outline' })} />
	</form>

	<Button class="mt-2" on:click={() => toast('showing toast')}>Show toast</Button>
</main>
