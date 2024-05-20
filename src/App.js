import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound.JS";
import User from "./components/users/User";
const App = () => {
  return (
    <div className="App">
<Router>
<Navbar />
<div className="container">
<Switch>
<Route exact path="/" component={Search} />
<Route exact path="/about" component={About} />
{/* Add this line to specify the routing*/}
<Route exact path="/user/:id" component={User} />
<Route path="/*" component={NotFound}></Route>
</Switch>
</div>
</Router>
</div>
    );
};
export default App;