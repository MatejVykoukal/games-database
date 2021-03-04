import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./components/pages/Home";
import GlobalStyle from "./GlobalStyles";
import { getGames } from "./redux/actions/getGamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <div className="App">
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
