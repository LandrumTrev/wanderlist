import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import FindPlace from "./pages/FindPlace";
import Saved from "./pages/Saved";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={FindPlace} />
        <Route exact path="/search" component={FindPlace} />
          <Route exact path="/saved" component={Saved} />
          <Route path="*" component={FindPlace} />
          {/* <Route exact path="*" component={FindPlace} /> */}
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
