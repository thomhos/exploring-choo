import html from 'choo/html';
import config from '../../config.js';
import styles from './styles.styl';

export default (state, prev, send) => {

  const { navigation } = config;

  // Return the rendered HTML
  return html`
    <nav>
      ${Object.keys(navigation).map((route) => (html`
        <a href=${navigation[route].slug}>${navigation[route].label}</a>
      `))}
    </nav>
  `;

};
