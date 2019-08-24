import {
    GameDetailsActionsTypes,
    GameDetailsActions
} from '../actions/gameDetailsActions';

type State = {
    gameId?: string 
}
const initialState: State = {};

export const gameDetailsReducer = (state: State = initialState, action: GameDetailsActions) => {
    switch (action.type) {
        case GameDetailsActionsTypes.SET_GAME_ID:
            return { ...state, gameId: action.payload };
        default:
            return state;
    }
};