import html from 'choo/html';
import header from './header';
import navigation from './navigation';
import footer from './footer';

export default (state, prev, send) => (
  // Return the rendered HTML
  html`
    <section
      class="col-s-12 col-m-12 col-l-4 col-xl-3 sidebar"
      data-activated="${state.sidebar.sidebarActiveState}">
        ${header(state, prev, send)}
        ${navigation(state, prev, send)}
        ${footer(state, prev, send)}
    </section>
  `
);
