<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { enhance } from '$app/forms';
</script>

<section class="dark">
	<Tabs.Root value="signin" class="p-2 border-2 rounded-lg bg-primary border-secondary">
		<Tabs.List>
			<Tabs.Trigger value="signin">signin</Tabs.Trigger>
			<Tabs.Trigger value="login">login</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="signin" class="bg-primary">
			<form method="post" use:enhance>
				<label for="username">Username</label>
				<input name="username" id="username" /><br />
				<label for="password">Password</label>
				<input type="password" name="password" id="password" /><br />
				<input type="submit" />
			</form>
		</Tabs.Content>
		<Tabs.Content value="login">
			<a href="/login">login (username & password or github)</a>
		</Tabs.Content>
	</Tabs.Root>
</section>
