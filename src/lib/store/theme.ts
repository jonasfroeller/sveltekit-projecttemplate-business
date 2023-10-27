import { persisted } from 'svelte-persisted-store';

const stringSerializer = {
	parse: (text: string) => text,
	stringify: (object: string) => object
};

export const theme = persisted('sk-pt-theme', 'dark', {
	serializer: stringSerializer
});
