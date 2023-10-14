<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageData;
</script>

<main class="flex items-center justify-center min-h-screen">
	<h1 class="flex items-end font-bold text-8xl">
		Hello&nbsp;<Icon icon="bx:world" />!
	</h1>

	<h1>Profile</h1>
	<p>User id: {data.userId}</p>
	<p>GitHub username: {data.username}</p>
	<form method="post" action="?/logout" use:enhance>
		<input type="submit" value="Sign out" />
	</form>
</main>
