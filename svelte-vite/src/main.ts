import './app.css'
import './global.css'
import App from './App.svelte'
import Loop from './Loop.svelte';

const app = new Loop({
  target: document.getElementById('app'),
})

export default app
