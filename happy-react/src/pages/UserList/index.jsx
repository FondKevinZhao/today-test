import { Component } from "react";

export default class UserList extends Component {
  render() {
    const { users, isLoading } = this.props;
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (users.length) {
      return (
        <div className="row">
          {users.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={item.avatar_url}
                    style={{ width: "100%" }}
                    alt={item.login}
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            );
          })}
        </div>
      );
    }
    if (!isLoading && !users.length) {
      return <h1>Input content</h1>;
    }
  }
}
