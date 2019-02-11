import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindPlace from "./pages/FindPlace";
import Saved from "./pages/Saved";
import Test from "./pages/Test";
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
          <Route exact path="/test" component={Test} />
          <Route path="*" component={FindPlace} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
