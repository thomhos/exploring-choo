// import all models here
import usersModel from './users.js';
import userModel from './user.js';

export default (app) => {

  // mount all models
  app.model(usersModel);
  app.model(userModel);

};
