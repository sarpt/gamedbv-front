import { Action } from 'redux';

export enum GameDetailsActionsTypes {
    SET_GAME_ID = '[game-details] Set game id'
}
export interface SetGameIdAction extends Action {
    type: GameDetailsActionsTypes.SET_GAME_ID,
    payload: string
}
export const setGameId = (gameId: string): SetGameIdAction => {
    return {
        type: GameDetailsActionsTypes.SET_GAME_ID,
        payload: gameId
    };
}

export type GameDetailsActions = SetGameIdAction;
