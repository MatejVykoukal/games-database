import axios from "axios";
import { Dispatch } from "redux";
import { gamesURL } from "../../api";

export const getGames = () => async (dispatch: Dispatch) => {
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
