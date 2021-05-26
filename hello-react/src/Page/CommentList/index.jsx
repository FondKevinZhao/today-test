import { Component } from "react";
import CommentItem from './CommentItem'


export default class CommentList extends Component {
  del = (id) => {
    const { deletes } = this.props
    deletes(id)
  }
  render() {
    const { comments } = this.props
    console.log(comments);
    return (
      <div>
        <h3 className="reply">评论回复：</h3>
        <h2 style={comments.length>0? {display:'none'} : {display:'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          { comments.map((item) => {
            return <CommentItem comment = {item} key = { item.id } del={this.del}/>
          })}

        </ul>
      </div>
    );
  }
}
