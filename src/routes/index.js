import { main, home, users, user } from '../views';

export default (app) => {

  // This will render the view inside the view area outside of the navigation
  const subview = (view) => (state, prev, send) => (
    main(state, prev, send, view)
  );

  // Mount all routes
  app.router((route) => [
    route('/', subview(home)),
    route('/users', subview(users), [
      route('/:userId', subview(user)),
    ]),
  ]);

};
