import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withTheme } from '@material-ui/core/styles';

const appBarElevation = 1;
const applicationTitle = 'Wii & NGC Database Viewer';
const optionsLabel = 'Options';

type props = {};

const ApplicationBar: React.FC<props> = () => {
  return (
    <React.Fragment>
      <AppBar elevation={ appBarElevation }>
        <Toolbar>
          <Typography variant="h5">
            { applicationTitle }
          </Typography>
          <Button color="inherit">
            { optionsLabel }
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </React.Fragment>
  );
};

export default withTheme(ApplicationBar);
