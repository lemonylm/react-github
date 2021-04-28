import "./App.css";
import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  };
  updateState = (state) => {
    this.setState(state);
  };
  render() {
    return (
      <div>
        <Header updateState={this.updateState}/>
        <List {...this.state} />
      </div>
    );
  }
}
