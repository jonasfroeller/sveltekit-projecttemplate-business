<script lang="ts">
	import { Switch } from '$component/ui/switch';
	import { theme } from '$lib/store/theme';
	import { updateTheme } from '$lib/dom';

	$: {
		$theme = checked ? 'dark' : 'light';
		updateTheme($theme);
	}

	let checked = $theme === 'dark' ? true : false;
</script>

<Switch bind:checked />
