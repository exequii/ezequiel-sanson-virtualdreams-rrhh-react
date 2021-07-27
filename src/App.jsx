import React from "react";
import { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contacto from "./pages/Contacto";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contacto" component={Contacto}></Route>
        </Switch>
      </div>
    );
  }
}
