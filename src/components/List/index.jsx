import React, { Component } from "react";
import './index.css'
export default class List extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="list-wrap">
        {users.map((item) => {
          return (
            <div className="card" key={item.id}>
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                <img src={item.avatar_url} alt="" style={{ width: "100px" }} />
                <p className="card-text">{item.login}</p>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
