import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindPlace from "./pages/FindPlace";
import Saved from "./pages/Saved";
import oldFindPlace from "./pages/oldFindPlace";
import Background from "./components/Background";

function App() {
  return (
    <Router>
      <div>
        <Background />
        <Switch>
          <Route exact path="/" component={FindPlace} />
          <Route exact path="/search" component={FindPlace} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/test" component={oldFindPlace} />
          <Route path="*" component={FindPlace} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
