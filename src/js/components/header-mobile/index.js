import html from 'choo/html';

export default (state, prev, send) => {

  const { menuActive } = state.headerMobile;

  const toggleSidebarActiveState = (e) => {
    e.preventDefault();
    send('headerMobile:toggleSidebarActiveState');
  };

  // Return the rendered HTML
  return html`
    <header class="col-s-12 header-mobile">
      <span>Thom Hos</span>
      <span>JavaScript Developer</span>

      <button
        onclick=${toggleSidebarActiveState}
        data-activated="${menuActive}">
        ToggleMenu
      </button>
    </section>
  `;
};
