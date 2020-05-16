import { combineEpics } from 'redux-observable';

import { gameSearchEpics } from '../../games/epics/search';
import { gameDetailsEpics } from '../../games/epics/details';
import { gameResultsEpics } from '../../games/epics/results';
import { apiInfoEpics } from '../../status/epics';

export const rootEpic = combineEpics(
  ...apiInfoEpics,
  ...gameResultsEpics,
  ...gameSearchEpics,
  ...gameDetailsEpics,
);
