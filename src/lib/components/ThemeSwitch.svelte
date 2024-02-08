<script lang="ts">
	import { Switch } from '$component/ui/switch';
	import { toggleMode, mode as mw_mode } from 'mode-watcher';
	import { onMount } from 'svelte';

	onMount(() => {
		mode.checked = $mw_mode === 'dark' ? true : false;
	});

	$: if (mode) {
		toggleMode();
	}

	let mode = { checked: false };
</script>

<Switch bind:checked={mode.checked} />
