import { combineEpics } from 'redux-observable';

import { fetchGamesResults, handleGameSearchChange } from './gameSearchEpics';
import { setGameIdEpic } from './gameDetailsEpics';
import { resetToFirstPage } from './gameResultsEpics';
import { fetchAvailableLanguages$ } from './appInfoEpics';

export const rootEpic = combineEpics(
  handleGameSearchChange,
  fetchAvailableLanguages$,
  fetchGamesResults,
  setGameIdEpic,
  resetToFirstPage,
);