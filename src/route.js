import React from "react";
import { Route, HashRouter } from "react-router-dom";
import App from "./App";
import About from "./About";
import Flavours from "./flavours";
import Book from "./Book";

const Router = () => {
  return (
    <HashRouter basename="/">
      <Route exact path="/React-IceCream-Website" component={App} />
      <Route path="/React-IceCream-Website/Flavours" component={Flavours} />
      <Route path="/React-IceCream-Website/Bookings" component={Book} />
      <Route path="/React-IceCream-Website/About" component={About} />
    </HashRouter>
  );
};

export default Router;
