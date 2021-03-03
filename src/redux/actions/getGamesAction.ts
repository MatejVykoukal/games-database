import axios from "axios";
import { Dispatch } from "redux";
import { GamesURL } from "../../api";

export const getGames = () => async (dispatch: Dispatch) => {
  const popularGamesData = await axios.get(GamesURL("popular"));
  const newGamesData = await axios.get(GamesURL("new"));
  const upcoming = await axios.get(GamesURL("upcoming"));
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      new: newGamesData.data.results,
      upcoming: upcoming.data.results,
    },
  });
};
