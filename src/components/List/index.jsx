import React, { Component } from "react";
import "./index.css";
export default class List extends Component {
  render() {
    const { users, isLoading, isFirst, err } = this.props;
    return (
      <div className="list-wrap">


        {isFirst ? (
          <h2>欢迎，请输入关键字搜索用户，点击按钮搜索</h2>
        ) : isLoading ? (
          <h2>Loading.......</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a
                  href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.avatar_url}
                    alt="avatar"
                    style={{ width: "100px" }}
                  />
                  <p className="card-text">{item.login}</p>
                </a>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
