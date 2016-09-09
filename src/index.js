import choo from 'choo';
import models from './models';
import routes from './routes';

// Define the app instance
const app = choo();

// Mount all the models
models(app);

// Mount all the routes
routes(app);

// Run forrest, run
const tree = app.start();

// append the app tree
document.getElementById('app').appendChild(tree);
