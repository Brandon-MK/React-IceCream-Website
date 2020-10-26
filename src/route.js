import React from "react";
import { Route, HashRouter } from "react-router-dom";
import App from "./App";
import About from "./About";
import Flavours from "./flavours";
import Book from "./Book";

const Router = () => {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={App} />
      <Route path="/Flavours" component={Flavours} />
      <Route path="/Bookings" component={Book} />
      <Route path="/About" component={About} />
    </HashRouter>
  );
};

export default Router;
