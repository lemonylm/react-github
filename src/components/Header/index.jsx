import React, { Component } from "react";
import axios from "axios";

import "./index.css";
export default class Header extends Component {
  search = () => {
    const { updateState } = this.props;
    const value = this.input.value.trim();
    if (!value) {
      alert("请勿输入空信息");
      this.input.value = "";
      return;
    } else {
      updateState({
        isFirst: false,
        isLoading: true,
      });
      axios({
        method: "GET",
        url: `https://api.github.com/search/users?q=${value}`,
      }).then(
        (response) => {
          const { items } = response.data;
          updateState({
            users: items,
            isLoading: false,
          });
        },
        (err) => {
          updateState({
            isLoading: false,
            err: err.message,
          });
        }
      );
    }
  };
  render() {
    return (
      <div className="search-wrap">
        <h1>Search Github Users</h1>
        <div className="inputWrap">
          <input
            onKeyUp={(e) => e.keyCode === 13 && this.search()}
            ref={(c) => (this.input = c)}
            type="text"
            placeholder="please input a username"
          />
          <button onClick={this.search}>搜索</button>
        </div>
      </div>
    );
  }
}
