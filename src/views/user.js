import html from 'choo/html';
import config from '../config.js';
import navigation from '../components/navigation';
import user from '../components/user';

export default (state, prev, send) => (

  html`
    <section>
      <p>${user(state, prev, send)}</p>
    </section>
  `

);
