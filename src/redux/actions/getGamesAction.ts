import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { gamesURL } from "../../api";
import { State } from "../reducers/gamesReducer";

export const getGames: ThunkAction<void, State, unknown, Action<string>> = async (dispatch) => {
  const popularGamesData = await axios.get(gamesURL("popular"));
  const newGamesData = await axios.get(gamesURL("new"));
  const upcoming = await axios.get(gamesURL("upcoming"));
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      new: newGamesData.data.results,
      upcoming: upcoming.data.results,
    },
  });
};
