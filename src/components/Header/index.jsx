import React, { Component } from "react";
import axios from "axios";

import "./index.css";
export default class Header extends Component {
 
  search = () => {
    const { value } = this.input;
    axios({
      method: "GET",
      url: `https://api.github.com/search/users?q=${value}`,
    }).then(
        (response)=>{
            const {items}=response.data
           this.props.saveUsers(items)
        },
        (err)=>{console.log(err)}
    )
  };
  render() {
    return (
      <div className="search-wrap">
        <h1>Search Github Users</h1>
        <div className="inputWrap">
          <input
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
