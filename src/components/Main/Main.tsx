import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withTheme } from '@material-ui/core/styles';

import GameSearch from '../GameSearch/GameSearch';
import ApplicationBar from '../ApplicationBar/ApplicationBar';

import { useStyles } from './Main.styles';

const Main: React.FC = () => {
    const styles = useStyles();

    return (
      <div className={ styles.main }>
        <ApplicationBar></ApplicationBar>
        <Paper>
          <GameSearch></GameSearch>
        </Paper>
      </div>
    );
};

export default withTheme(Main);