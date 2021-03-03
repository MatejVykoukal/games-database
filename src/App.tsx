import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "./redux/actions/getGamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  return <div className="App"></div>;
}

export default App;
