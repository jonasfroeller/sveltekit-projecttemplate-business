<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Icon from '@iconify/svelte';
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>LogIn</title>
</svelte:head>

<section class="p-4 border-2 rounded-lg border-secondary">
	<Tabs.Root value="username-password" class="w-[400px]">
		<Tabs.List class="grid w-full grid-cols-2">
			<Tabs.Trigger value="username-password">Username & Password</Tabs.Trigger>
			<Tabs.Trigger value="open-authorization">Open Authorization</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="username-password">
			<Card.Root>
				<Card.Header>
					<Card.Title>Username & Password</Card.Title>
					<Card.Description>LogIn using your username and password.</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<form method="post" use:enhance>
						<Label for="username">Username</Label>
						<Input
							type="text"
							placeholder="jonesis69"
							name="username"
							id="username"
							class="max-w-xs"
						/>
						<Label for="password">Password</Label>
						<Input
							type="password"
							placeholder="********"
							name="password"
							id="password"
							class="max-w-xs"
						/>
						<input
							type="submit"
							class={`mt-2 ${buttonVariants({ variant: 'outline' })}`}
						/>
					</form>
				</Card.Content>
				<Card.Footer>
					<p class="flex justify-center">
						<a href="/signin" class="hover:underline">signin</a>&nbsp;instead
					</p>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
		<Tabs.Content value="open-authorization">
			<Card.Root>
				<Card.Header>
					<Card.Title>Open Authorization</Card.Title>
					<Card.Description>Choose a provider below.</Card.Description>
				</Card.Header>
				<Card.Content class="space-y-2">
					<a href="/login/github" class="flex items-center gap-2 hover:underline">
						<Icon icon="mdi:github" width="25px" />
						login with GitHub
					</a>
					<Separator class="my-4" />
				</Card.Content>
				<Card.Footer>
					<p class="flex justify-center">
						<a href="/signin" class="hover:underline">signin</a>&nbsp;instead
					</p>
				</Card.Footer>
			</Card.Root>
		</Tabs.Content>
	</Tabs.Root>
</section>
