import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './client/App';
import { register } from './client/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

register();
