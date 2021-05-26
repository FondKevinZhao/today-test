import { Component } from 'react'

export default class CommentItem extends Component {
  deleteComment = () => {
    const { del } = this.props
    const { id } = this.props.comment
    del(id)
  }

  render() {
    const { username, content } = this.props.comment
    return <li className="list-group-item">
    <div className="handle">
      <button onClick={ this.deleteComment }>删除</button>
    </div>
    <p className="user">
      <span>{ username }</span>
      <span>说:</span>
    </p>
    <p className="centence">{ content }</p>
  </li>
  }
}