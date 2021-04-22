import "./App.css";
import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
export default class App extends Component {
  state = {
    users: [],
  };
  saveUsers = (data) => {
    this.setState({ users: data });
  };
  render() {
    return (
      <div>
        <Header saveUsers={this.saveUsers} />
        <List users={this.state.users}/>
      </div>
    );
  }
}
