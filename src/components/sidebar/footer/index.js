import html from 'choo/html';
import styles from './styles.styl';
import socialIcons from './socialIcons';
import languageSwitch from './languageSwitch';

export default (state, prev, send) => (
  // Return the rendered HTML
  html`
    <footer>
      ${socialIcons(state, prev, send)}
      ${languageSwitch(state, prev, send)}
    </footer>
  `

);
