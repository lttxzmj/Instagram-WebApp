import React from 'react'
import ReactDOM from 'react-dom'

export default class CommentForm extends React.Component {
  render(){
    return(
      <div className="comment-box center">
        <input type="text" placeholder="Write a comment..." />
      </div>
    )
  }
}
