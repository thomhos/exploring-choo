import html from 'choo/html';
import sidebar from '../sidebar';
import styles from './styles.styl';

export default (state, prev, send, view) => (
  html`
    <main class="container">
      ${sidebar(state, prev, send)}
      ${view(state, prev, send)}
    </main>
  `
);
