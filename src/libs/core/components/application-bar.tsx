import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import { RoutePaths } from '../consts/route-paths';

import { Title, MainToolbar } from './application-bar.styles';
import { NavigationButtons } from './navigation-buttons';
import { Route } from '../models/route';
import { routes, rootRoute } from '../consts/routes';

const appBarElevation = 1;
const defaultRoute = rootRoute;

type props = {};

export const ApplicationBar: React.FC<props> = () => {

  const location = useLocation();
  const [ route, setRoute ] = useState<Route>(defaultRoute);

  useEffect(() => {
    const currentPath = location.pathname as RoutePaths;
    const currentRoute = routes.has(currentPath) ? routes.get(currentPath)! : defaultRoute;
    setRoute(currentRoute);
  }, [location]);

  return (
    <React.Fragment>
      <AppBar elevation={ appBarElevation }>
        <MainToolbar>
          <Title>
            <Link component={ RouterLink } to={ route.path } color="inherit">
              { route.label }
            </Link>
          </Title>
          <NavigationButtons></NavigationButtons>
        </MainToolbar>
      </AppBar>
      <Toolbar></Toolbar>
    </React.Fragment>
  );
};
