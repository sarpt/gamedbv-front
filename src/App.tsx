import React from 'react';

import { ThemeProvider, StylesProvider } from '@material-ui/styles';

import { createMuiTheme, responsiveFontSizes, withTheme } from '@material-ui/core/styles';
import theme from './theme.json';

import { MainContainer } from './libs/core/components/main';

const AppTheme = responsiveFontSizes(createMuiTheme(theme));
const ThemedMainContainer = withTheme(MainContainer);

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <StylesProvider injectFirst>
        <ThemedMainContainer></ThemedMainContainer>
      </StylesProvider>
    </ThemeProvider>
  );
};
