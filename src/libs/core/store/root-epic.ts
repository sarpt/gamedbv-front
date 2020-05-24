import { combineEpics } from 'redux-observable';

import { gameSearchEpics } from '../../games/epics/search';
import { gameDetailsEpics } from '../../games/epics/details';
import { gameResultsEpics } from '../../games/epics/results';
import { availabilityEpics } from '../../status/epics/availability';

export const rootEpic = combineEpics(
  ...availabilityEpics,
  ...gameResultsEpics,
  ...gameSearchEpics,
  ...gameDetailsEpics,
);
