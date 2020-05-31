import { RoutePaths } from './route-paths';
import { RouteLabels } from './route-labels';
import { Route } from '../models/route';

export const rootRoute = { label: RouteLabels.Games, path: RoutePaths.Games };

export const routes: Map<RoutePaths, Route> = new Map([
  [RoutePaths.Root, rootRoute],
  [RoutePaths.Games, { label: RouteLabels.Games, path: RoutePaths.Games }],
  [RoutePaths.Settings, { label: RouteLabels.Settings, path: RoutePaths.Settings }],
  [RoutePaths.Status, { label: RouteLabels.Status, path: RoutePaths.Status }],
]);
