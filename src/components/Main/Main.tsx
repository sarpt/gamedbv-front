import React from 'react';

import { withTheme } from '@material-ui/core/styles';

import GameSearch from '../GameSearch/GameSearch';
import ApplicationBar from '../ApplicationBar/ApplicationBar';

import { useStyles } from './Main.styles';

const Main: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={ styles.main }>
      <ApplicationBar></ApplicationBar>
      <div className={ styles.content }>
        <GameSearch></GameSearch>
      </div>
    </div>
  );
};

export default withTheme(Main);