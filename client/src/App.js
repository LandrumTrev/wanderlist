// App contains Components that appear on every page (Nav, etc)
// as well as the React Router Switch Routes 
// to control which "page" is displayed for each HTML URL path
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Components that appear on every page view
import Nav from "./components/Nav";

// import individual page view Components
import Home from "./pages/Home";

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    // wrap entire App in Router tags
    <Router>
      {/* give a single DOM element to contain all other DOM elements */}
      <div>
        {/* Nav is always displayed */}
        {/* <nav> with <a> (NOTE: NOT A React Router <Link> component) */}
        {/* Bootstrap "navbar" classes on the <nav> and <a> elements */}
        <Nav />
        {/* Switch controls Route component views displayed, first matching route displayed */}
        {/* use "exact path" unless you are capturing sub-paths and adding additional content to a primary page view path */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;