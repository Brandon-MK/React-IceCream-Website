import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import About from "./About";
import Flavours from "./flavours";
import Book from "./Book";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Flavours" component={Flavours} />
      <Route path="/Bookings" component={Book} />
      <Route path="/About" component={About} />
    </Switch>
  );
};

export default Router;
