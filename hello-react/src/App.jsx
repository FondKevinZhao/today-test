
import { Component } from 'react';
import CommentList from './Page/CommentList'
import AddComment from './Page/AddComment'
import './index.css'




export default class App extends Component {
  state = {
    comments: [
      {
        id: 1,
        username: 'zs',
        content: 'hello'
      },
      {
        id: 2,
        username: 'ls',
        content: 'world'
      }
    ]
  }
  add = (comment) => {
    let { comments } = this.state
    this.setState({
      comments: [...comments, comment]
    })
  }
  deletes = (id) => {
    let count = 0;
    let { comments } = this.state //拿数据
    let newComments = [...comments]
    newComments.filter((item, index) => {
      if (item.id===id) {
        count = index;
      }
      return count
    })
    newComments.splice(count, 1)
    this.setState({
      comments: newComments,
    })
  }
  render() {
    const { comments } = this.state
    return <div>
    <header className="site-header jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
      <div className="col-md-4">
        <AddComment add={this.add}/>
      </div>
      <div className="col-md-8">
        <CommentList comments = { comments } deletes = {this.deletes}/>
      </div>
    </div>
  </div>
  }
}