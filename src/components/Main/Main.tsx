import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { GameSearchPage } from '../GameSearchPage/GameSearchPage';
import { ApplicationBar } from '../ApplicationBar/ApplicationBar';

import { Main, Content } from './Main.styles';
import { SettingsPage } from '../SettingsPage/SettingsPage';

export const MainContainer: React.FC = () => {
  return (
    <Main>
      <Router>
        <ApplicationBar></ApplicationBar>
        <Content>
          <Switch>
            <Route path="/settings">
              <SettingsPage></SettingsPage>
            </Route>
            <Route path={ ["/games", "/" ] }>
              <GameSearchPage></GameSearchPage>
            </Route>
          </Switch>
        </Content>
      </Router>
    </Main>
  );
};
