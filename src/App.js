import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { SearchProvider } from "./SearchContext";

const App = () => {
  return (
    <div className="App">
     <SearchProvider>
      <Router>
        <Navbar />
        <Home />
      </Router>
      </SearchProvider>
    </div>
  );
};

export default App;