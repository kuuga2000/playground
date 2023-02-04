import './styles/main.scss';

import joke from './generateJoke';

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		jokee: joke()
	}
});

export default app;