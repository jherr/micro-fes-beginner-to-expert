import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Switch>
          <Route path="/product/:id" component={PDPContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
