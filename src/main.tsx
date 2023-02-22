import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CustomThemeProvider from './lib/provider/ThemeProvider';
import { themes } from './lib/themes';

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider themes={themes}>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
