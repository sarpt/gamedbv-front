import React from 'react';

import { ThemeProvider, StylesProvider } from '@material-ui/styles';

import { createMuiTheme, responsiveFontSizes, withTheme } from '@material-ui/core/styles';
import theme from './theme.json';

import { MainContainer } from './components/Main/Main';

const AppTheme = responsiveFontSizes(createMuiTheme(theme));
const ThemedMainContainer = withTheme(MainContainer);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <StylesProvider injectFirst>
        <ThemedMainContainer></ThemedMainContainer>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
