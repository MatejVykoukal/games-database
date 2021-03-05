import Home from "./pages/Home";
import GlobalStyle from "./GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <GlobalStyle />
    </div>
  );
}

export default App;
