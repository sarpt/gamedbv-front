import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { GameSearchPage } from './pages/game-search';
import { SettingsPage } from './pages/settings';
import { StatusPage } from './pages/status';

import { ApplicationBar } from './application-bar';

import { Routes } from '../consts/routes';

import { Main, Content } from './main.styles';

export const MainContainer: React.FC = () => {
  return (
    <Main>
      <Router>
        <ApplicationBar></ApplicationBar>
        <Content>
          <Switch>
            <Route path={ Routes.Status }>
              <StatusPage></StatusPage>
            </Route>
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
