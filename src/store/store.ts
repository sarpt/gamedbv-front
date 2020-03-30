import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers/rootReducer';
import { rootEpic } from './epics/rootEpic';

// redux-observable setup
const epicMiddleware = createEpicMiddleware();

// redux store setup
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware),
  )
);

// run has to be used after createStore call
epicMiddleware.run(rootEpic);

export type AppState = ReturnType<typeof rootReducer>;