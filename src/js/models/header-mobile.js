import config from '../config';

export default {
  namespace: 'headerMobile',
  state: {
    sidebarActiveState: false,
  },
  effects: {
    toggleSidebarActiveState: (data, state, send, done) => {
      const sidebarActiveState = !state.sidebarActiveState;
      send('sidebar:setActiveState', sidebarActiveState, () => {
        send('headerMobile:toggleActiveState', data, done);
      });
    },
    fetchSocials: (data, state, send, done) => {
      const { socials } = config;
      send('sidebar:receiveSocials', socials, done);
    },
    fetchLanguages: (data, state, send, done) => {
      const { languages } = config;
      send('sidebar:receiveLanguages', languages, done);
    },
  },
  reducers: {
    toggleActiveState: (data, state) => ({ sidebarActiveState: !state.sidebarActiveState }),
  },
};
