import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { detailsReducer } from "./detailsReducer";

export default combineReducers({ games: gamesReducer, details: detailsReducer });
