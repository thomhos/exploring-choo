import html from 'choo/html';
import styles from './styles.styl';
import header from './header';
import navigation from './navigation';
import footer from './footer';

export default (state, prev, send) => (
  // Return the rendered HTML
  html`
    <section class="sidebar">
      ${header(state, prev, send)}
      ${navigation(state, prev, send)}
      ${footer(state, prev, send)}
    </section>
  `
);
