import { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  state = {
    username: "",
  };
  handleChange = (e) => {
    this.setState({
      username: e.target.value.trim(),
    });
  };

  clickSearch = async () => {
    this.props.changeLoading(true);
    const users = await axios({
      method: "GET",
      url: `https://api.github.com/search/users?q=${this.state.username}`,
    });
    this.props.changeLoading(false);
    this.props.changeUsers(
      users.data.items.map((item) => {
        return {
          id: item.id,
          html_url: item.html_url,
          login: item.login,
          avatar_url: item.avatar_url,
        };
      })
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handleChange}
          />
          <button onClick={this.clickSearch}>Search</button>
        </div>
      </section>
    );
  }
}
