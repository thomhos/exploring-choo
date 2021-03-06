import choo from 'choo';
import models from './js/models';
import routes from './js/routes';
import styles from './styles/index.styl';

// Define the app instance
const app = choo();

// Mount all the models
models(app);

// Mount all the routes
routes(app);

app.use({
  onAction: (data, state, name, caller, createSend) => {
    console.groupCollapsed(`Action: ${caller} -> ${name}`);
    console.log(data);
    console.log(state);
    console.groupEnd();
  },
});

// Run forrest, run
const tree = app.start();

// append the app tree
document.getElementById('app').appendChild(tree);
