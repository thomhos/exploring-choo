import config from '../config';

export default {
  namespace: 'sidebar',
  state: {
    heading: {},
    navigation: [],
    socials: [],
    languages: [],
  },
  effects: {
    fetchNavigation: (data, state, send, done) => {
      const { navigation } = config;
      send('sidebar:receiveNavigation', navigation, done);
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
    receiveNavigation: (data, state) => ({ navigation: data }),
    receiveSocials: (data, state) => ({ socials: data }),
    receiveLanguages: (data, state) => ({ languages: data }),
  },
};
