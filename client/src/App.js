import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Achievement from "./pages/Rewards";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="body">
          <Switch>
            <Route exact path="/dashboard" compontent={Dashboard} />
            <Route exact path="/achievements" component={Achievement} />
            <Route exact path="/achievements/:id" component={Achievement} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
