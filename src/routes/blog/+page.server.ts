import { fetchEntries, getBuilderSearchParams } from '@builder.io/sdk-svelte';
import { CMS_KEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const content = await fetchEntries({
		model: 'blog-article',
		apiKey: CMS_KEY,
		options: getBuilderSearchParams(event.url.searchParams),
		userAttributes: {
			urlPath: event.url.pathname || '/'
		}
	});

	return { content };
}
