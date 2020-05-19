import React from 'react';
import { useHistory, Link as RouterLink } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';

import { OptionsButton, Title, MainToolbar } from './application-bar.styles';
import { Routes } from '../consts/routes';

const appBarElevation = 1;
const applicationTitle = 'Game Database Viewer';

type props = {};

export const ApplicationBar: React.FC<props> = () => {
  const history = useHistory();

  const navigateToSettings = () => {
    history.push(Routes.Settings);
  };

  const navigateToStatus = () => {
    history.push(Routes.Status);
  };

  return (
    <React.Fragment>
      <AppBar elevation={ appBarElevation }>
        <MainToolbar>
          <Title>
            <Link component={ RouterLink } to={ Routes.Root } color="inherit">
              { applicationTitle }
            </Link>
          </Title>
          <OptionsButton onClick={ navigateToStatus }>
            <AssessmentIcon></AssessmentIcon>
          </OptionsButton>
          <OptionsButton onClick={ navigateToSettings }>
            <SettingsIcon></SettingsIcon>
          </OptionsButton>
        </MainToolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </React.Fragment>
  );
};
