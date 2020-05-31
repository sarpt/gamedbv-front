import React from 'react';
import { useHistory } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';

import { RoutePaths } from '../consts/route-paths';

import { OptionsButton } from './navigation-buttons.styles';

type props = {};

export const NavigationButtons: React.FC<props> = () => {
  const history = useHistory();

  const navigateToHome = () => {
    history.push(RoutePaths.Root);
  };

  const navigateToSettings = () => {
    history.push(RoutePaths.Settings);
  };

  const navigateToStatus = () => {
    history.push(RoutePaths.Status);
  };

  return (
    <React.Fragment>
      <OptionsButton onClick={ navigateToHome }>
        <HomeIcon></HomeIcon>
      </OptionsButton>
      <OptionsButton onClick={ navigateToStatus }>
        <AssessmentIcon></AssessmentIcon>
      </OptionsButton>
      <OptionsButton onClick={ navigateToSettings }>
        <SettingsIcon></SettingsIcon>
      </OptionsButton>
    </React.Fragment>
  );
};
