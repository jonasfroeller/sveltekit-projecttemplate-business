import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { minify } from 'html-minifier';
import { building } from '$app/environment';

// https://kit.svelte.dev/docs/migrating#integrations-html-minifier
const minification_options = {
	useShortDoctype: true,
	trimCustomFragments: true,
	processConditionalComments: true,

	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: false,
	removeAttributeQuotes: true,
	removeComments: false, // some hydration code needs comments, so leave them in
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);

	let page = '';

	return await resolve(event, {
		transformPageChunk: ({ html, done }) => {
			page += html;

			if (done) {
				return building ? minify(page, minification_options) : page;
			}
		}
	});
};
