import html from 'choo/html';
import config from '../config.js';
import navigation from '../components/navigation';
import userlist from '../components/userlist';

export default (state, prev, send) => (

  html`
    <section>
      ${userlist(state, prev, send)}
    </section>
  `

);
