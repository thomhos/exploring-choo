import html from 'choo/html';
import styles from './styles.styl';

export default (state, prev, send) => {

  // Set the social variables
  const { languages } = state.sidebar;

  // If the social vars are not present in the state go get it.
  if (!languages || !languages.length) {
    send('sidebar:fetchLanguages');
  }

  // Return the rendered HTML
  return html`
    <nav>
      ${languages.map((language) => (html`
        <button>${language.label}</button>
      `))}
    </nav>
  `;

};
