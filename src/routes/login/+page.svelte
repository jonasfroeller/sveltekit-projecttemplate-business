<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Icon from '@iconify/svelte';
	import { enhance } from '$app/forms';
</script>

<section class="dark">
	<Tabs.Root value="login" class="p-2 border-2 rounded-lg bg-primary border-secondary">
		<Tabs.List>
			<Tabs.Trigger value="login">login</Tabs.Trigger>
			<Tabs.Trigger value="signin">signin</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="login" class="bg-primary">
			<a href="/login/github" class="flex items-center gap-2 hover:underline"
				><Icon icon="mdi:github" width="25px" />login with GitHub</a
			>
			<form method="post" use:enhance>
				<label for="username">Username</label>
				<input name="username" id="username" /><br />
				<label for="password">Password</label>
				<input type="password" name="password" id="password" /><br />
				<input type="submit" />
			</form>
		</Tabs.Content>
		<Tabs.Content value="signin">
			<a href="/signin">signin (username, password)</a>
		</Tabs.Content>
	</Tabs.Root>
</section>
