import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import theme from './theme.json';

import Main from './components/Main/Main';

const AppTheme = responsiveFontSizes(createMuiTheme(theme));

const App: React.FC = () => {

  return (
    <ThemeProvider theme={AppTheme}>
      <Main></Main>
    </ThemeProvider>
  );
}

export default App;
