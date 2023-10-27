import { browser } from '$app/environment';

export function updateTheme(className: string) {
	if (browser) {
		const oldClassName = className === 'dark' ? 'light' : 'dark';
		document.documentElement.classList.remove(oldClassName);
		document.documentElement.classList.add(className);
	}
}
