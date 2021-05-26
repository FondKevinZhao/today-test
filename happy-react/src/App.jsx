import React, { Component } from "react";
import Search from './pages/Search'
import UserList from './pages/UserList'


export default class App extends Component {
  state = {
    isLoading: false,
    users: [],
  }
  changeLoading = (isLoading) => {
    this.setState({
      isLoading,
    })
  }

  changeUsers = (users) => {
    this.setState({
      users,
    })
    console.log(users);
  }
  render() {
    return (
      <div className="container">
        <Search changeLoading={this.changeLoading} changeUsers={this.changeUsers}/>
        <UserList users={ this.state.users} isLoading={this.state.isLoading}/>
      </div>
    );
  }
}
