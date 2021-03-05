import { combineReducers } from "redux";
import { detailsReducer, GameDetailsState } from "./detailsReducer";
import { gamesReducer, GamesState } from "./gamesReducer";

export interface GenericState {
  games: GamesState;
  details: GameDetailsState;
}

export const rootReducer = combineReducers({ games: gamesReducer, details: detailsReducer });
