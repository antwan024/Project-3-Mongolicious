import React from 'react';
import './App.css';
import Home from './Home';
import Tasks from './Tasks';
import Points from './Points';
import Sponsor from './Sponsor';
import Login from './Login';
import Signup from './Signup';
import { Route, Link} from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <Nav />
     <Footer />
     <Route exact path="/" component={Home} />
     <Route exact path="/Tasks" component={Tasks} />
     <Route exact path="/Points" component={Points} />
     <Route exact path="/Sponsor" component={Sponsor} />
     <Route exact path="/Login" component={Login} />
     <Route exact path="/Signup" component={Signup} />
    </div>
  );
}

export default App;
