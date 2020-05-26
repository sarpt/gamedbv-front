import { combineEpics } from 'redux-observable';

import { gameSearchEpics } from '../../games/epics/search';
import { gameDetailsEpics } from '../../games/epics/details';
import { gameResultsEpics } from '../../games/epics/results';
import { availabilityEpics } from '../../status/epics/availability';
import { updatesEpics } from '../../status/epics/updates';

export const rootEpic = combineEpics(
  ...availabilityEpics,
  ...gameResultsEpics,
  ...gameSearchEpics,
  ...gameDetailsEpics,
  ...updatesEpics,
);
