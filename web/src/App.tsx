import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { Toast } from './styles/toast';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toast limit={3} autoClose={5000} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
