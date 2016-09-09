import html from 'choo/html';
import config from '../config.js';
import navigation from '../components/navigation';

export default (state, prev, send, view) => (

  html`
    <main>
      ${navigation(state, prev, send)}
      ${view(state, prev, send)}
    </main>
  `

);
