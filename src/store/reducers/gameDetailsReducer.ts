import {
  GameDetailsActionsTypes,
  GameDetailsActions,
} from '../../libs/games/actions/details';

type State = {
  gameId?: string,
};
const initialState: State = {};

export const gameDetailsReducer = (state: State = initialState, action: GameDetailsActions) => {
  switch (action.type) {
    case GameDetailsActionsTypes.SetGameId:
      return { ...state, gameId: action.payload };
    default:
      return state;
  }
};
