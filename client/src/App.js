import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Achievement from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="body">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Achievement} />
              <Route exact path="/achievements/:id" component={Achievement} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
