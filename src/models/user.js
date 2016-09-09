export default {
  namespace: 'user',
  state: {
    user: {},
  },
  effects: {
    fetch: (data, state, send, done) => {
      const body = { id: data, name: 'Joe' };
      send('user:receive', body, done);
    },
    log: (data, state, send, done) => {
      console.info('current user is: ', state);
    },
  },
  reducers: {
    receive: (data, state) => ({ user: data }),
  },
};
