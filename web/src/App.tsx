import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Landing from './pages/Landing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
