import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { RoutePaths } from '../consts/route-paths';

import { connectToUpdatesWebsocket } from '../../status/actions/updates';

import { GameSearchPage } from './pages/game-search';
import { SettingsPage } from './pages/settings';
import { StatusPage } from './pages/status';
import { Main, Content } from './main.styles';
import { ApplicationBar } from './application-bar';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  dispatchConnectToUpdateWebsocket: connectToUpdatesWebsocket,
};

type additionalProps = {};

type props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & additionalProps;

const Component: React.FC<props> = ({ dispatchConnectToUpdateWebsocket }) => {
  useEffect(() => {
    dispatchConnectToUpdateWebsocket();
  }, [dispatchConnectToUpdateWebsocket]);

  return (
    <Main>
      <Router>
        <ApplicationBar></ApplicationBar>
        <Content>
          <Switch>
            <Route path={ RoutePaths.Status }>
              <StatusPage></StatusPage>
            </Route>
            <Route path={ RoutePaths.Settings }>
              <SettingsPage></SettingsPage>
            </Route>
            <Route path={ [RoutePaths.Root, RoutePaths.Games ] }>
              <GameSearchPage></GameSearchPage>
            </Route>
          </Switch>
        </Content>
      </Router>
    </Main>
  );
};

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
