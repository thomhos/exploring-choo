import html from 'choo/html';

export default (state, prev, send) => {
  const { users } = state.users;

  // If the users are not present in the state go get it.
  if (!users || !users.length) {
    send('users:fetch');
  }

  // Render the appropriate HTML
  return html`
    <ul>
    ${users.map((user) => (html`
      <li>
        <span>${user.name}</span>
        <a href="/users/${user.id}">Show profile</a>
      </li>
    `))}
    </ul>
  `;
};
