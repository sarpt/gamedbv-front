import { combineEpics } from 'redux-observable';

import { gameSearchEpics } from './gameSearchEpics';
import { gameDetailsEpics } from './gameDetailsEpics';
import { gameResultsEpics } from './gameResultsEpics';
import { apiInfoEpics } from './appInfoEpics';

export const rootEpic = combineEpics(
  ...apiInfoEpics,
  ...gameResultsEpics,
  ...gameSearchEpics,
  ...gameDetailsEpics,
);
