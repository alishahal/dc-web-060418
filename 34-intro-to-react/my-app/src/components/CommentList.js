import React from 'react'
import Comment from './Comment'

const commentData = [
  {id: 1, commentContent:"Hi", author:"Jon"},
  {id: 2, commentContent:"Hey", author:"Jane"},
  {id: 3, commentContent:"Suup", author:"Jim"},
  {id: 4, commentContent:"heya", author:"Jimmy"}
]

const CommentList = (props) => {
  return (
    <div className="comment-list">
      {commentData.map(comment => <Comment key={comment.id} comment={comment}/>)}
    </div>
  )
}

// class CommentList extends React.Component{
//   //React.createElement('div', "CommentList")
//   render(){
//     debugger;
//     return(
//       <div className="comment-list">CommentList</div>
//     )
//   }
// }

export default CommentList
