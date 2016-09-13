import html from 'choo/html';

export default (state, prev, send) => {

  // Set the navigation variables
  const { navigation } = state.sidebar;

  // If the navigation vars are not present in the state go get it.
  if (!navigation || !navigation.length) {
    send('sidebar:fetchNavigation');
  }

  // Return the rendered HTML
  return html`
    <nav>
      ${navigation.map((route) => (html`
        <a href=${route.slug}>${route.label}</a>
      `))}
    </nav>
  `;

};
