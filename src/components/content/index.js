// import html from 'choo/html';
//
// export default (state, prev, send) => {
//   const { userId } = state.params;
//   const { user } = state.user;
//
//   // If the user is not present in the state, or not equal to the one we selected, go get it.
//   if (!user || userId !== user.id) {
//     send('user:fetch', userId);
//   }
//
//   // Clickhandler when clicking the button
//   function onClick(e) {
//     // allows onInput callback to be optional
//     send('user:log');
//     // not called if above lines throw error, degrading to default form functionality
//     e.preventDefault();
//   }
//
//   // Return the rendered HTML
//   return html`
//     <section>
//       <p>${user.name}</p>
//       <button onclick=${onClick}>Do something</button>
//     </section>
//   `;
// };
