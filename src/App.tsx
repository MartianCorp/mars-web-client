import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Postings } from "./components/Postings";
import JobAd from "./components/Ad";

import 'normalize.css';

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="c-main">
        <Navigation />
        <Route exact path="/" component={Hero} />
        <Route exact path="/jobs" component={Postings} />
        <Route path="/jobs/create" component={JobAd} />
        <Postings />
      </div>
    </Router>
  );
}

export default App;
