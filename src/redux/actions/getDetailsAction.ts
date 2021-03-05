import axios from "axios";
import { Dispatch } from "redux";
import { gamesURL } from "../../api";

export const getDetails = (id: number) => async (dispatch: Dispatch) => {
  const details = await axios.get(gamesURL("details", id));
  const screenShots = await axios.get(gamesURL("screenshots", id));
  console.log(details.data);
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      details: details.data,
      screenShots: screenShots.data.results,
    },
  });
};
