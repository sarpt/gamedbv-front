import { combineEpics } from 'redux-observable';

import { fetchGamesResults, handleGameSearchChange } from './gameSearchEpic';
import { setGameIdEpic } from './gameDetailsEpic';
import { resetToFirstPage } from './gameResultsEpic';

export const rootEpic = combineEpics(
  handleGameSearchChange,
  fetchGamesResults,
  setGameIdEpic,
  resetToFirstPage,
);