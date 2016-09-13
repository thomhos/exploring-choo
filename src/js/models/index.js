// import all models here
import sidebarModel from './sidebar.js';
import headerMobileModel from './header-mobile.js';

export default (app) => {

  // mount all models
  app.model(headerMobileModel);
  app.model(sidebarModel);

};
