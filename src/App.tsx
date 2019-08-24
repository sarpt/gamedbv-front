import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import theme from './theme.json';

import GameSearch from './components/GameSearch/GameSearch';
import ApplicationBar from './components/ApplicationBar/ApplicationBar';

const AppTheme = createMuiTheme(theme);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ AppTheme }>
      <ApplicationBar></ApplicationBar>
      <GameSearch></GameSearch>
    </ThemeProvider>
  );
}

export default App;
