import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SettingsIcon from '@material-ui/icons/Settings';

import { OptionsButton } from './ApplicationBar.styles';

const appBarElevation = 1;
const applicationTitle = 'Wii & NGC Database Viewer';

type props = {};

export const ApplicationBar: React.FC<props> = () => {
  return (
    <React.Fragment>
      <AppBar elevation={ appBarElevation }>
        <Toolbar>
          <Typography variant="h5">
            { applicationTitle }
          </Typography>
          <OptionsButton>
            <SettingsIcon></SettingsIcon>
          </OptionsButton>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </React.Fragment>
  );
};
