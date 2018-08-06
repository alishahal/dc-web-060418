import React from 'react'

const Comment = (props) => {
  console.log(props.comment.commentContent)
  return (
    <div className="comment">Comment
      <p>{props.comment.commentContent}</p>
      <p>{props.comment.author}</p>
    </div>
  )
}

export default Comment
