import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { GameSearchPage } from './pages/gameSearch';
import { ApplicationBar } from './application-bar';

import { Main, Content } from './main.styles';
import { SettingsPage } from './pages/settings';
import { Routes } from '../consts/routes';

export const MainContainer: React.FC = () => {
  return (
    <Main>
      <Router>
        <ApplicationBar></ApplicationBar>
        <Content>
          <Switch>
            <Route path={ Routes.Settings }>
              <SettingsPage></SettingsPage>
            </Route>
            <Route path={ [Routes.Root, Routes.Games ] }>
              <GameSearchPage></GameSearchPage>
            </Route>
          </Switch>
        </Content>
      </Router>
    </Main>
  );
};
