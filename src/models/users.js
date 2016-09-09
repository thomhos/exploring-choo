export default {
  namespace: 'users',
  state: {
    users: [],
  },
  effects: {
    fetch: (data, state, send, done) => {
      const body = [{ id: '123', name: 'Joe' }, { id: '234', name: 'John' }];
      send('users:receive', body, done);
    },
  },
  reducers: {
    receive: (data, state) => ({ users: data }),
  },
};
