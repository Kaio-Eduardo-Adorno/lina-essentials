import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { themes } from './lib/themes';
import { LinaEssentialsThemeProvider } from './lib';

ReactDOM.render(
  <React.StrictMode>
    <LinaEssentialsThemeProvider themes={themes}>
      <App />
    </LinaEssentialsThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
