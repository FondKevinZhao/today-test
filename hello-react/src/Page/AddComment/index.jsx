import { Component } from "react";

export default class AddComment extends Component {
  state = {
    username: '',
    content: ''
  }
  usernameChange = (e) => {
    let username = e.target.value.trim()
    if (!username) return
    this.setState({
      username,
    })
  }
  contentChange = (e) => {
    let content = e.target.value.trim()
    if (!content) return 
    this.setState({
      content,
    })
  }
  handleClick = () => {
    const { add } = this.props
    const { username, content } = this.state
    const comment = {
      id: Date.now(),
      username,
      content,
    }
    add(comment)
    this.setState({
      username: '',
      content: '',
    })
  }
  render() {
    const { username, content } = this.state
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label>用户名</label>
          <input type="text" value = {username} className="form-control" placeholder="用户名" onChange={ this.usernameChange }/>
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea
            className="form-control"
            rows="6"
            placeholder="评论内容" onChange={ this.contentChange } value = { content }></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" className="btn btn-default pull-right" onClick = {this.handleClick}>
              提交
            </button>
          </div>
        </div>
      </form>
    );
  }
}
