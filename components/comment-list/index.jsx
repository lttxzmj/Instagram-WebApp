import React from 'react'
import ReactDOM from 'react-dom'

export default class CommentList extends React.Component {
  render(){
    return(
      <div className="comment-detail">
        <div className="comment-item item-1">
          <div className="person-photo">
            <img src="https://cl.ly/231z0K3c2A1c/avatar01.png" alt="miekd" />
          </div>
          <span className="person-name">miekd</span>
          <span className="comment-content">Beautiful</span>
        </div>
        <div className="comment-item item-2">
          <div className="person-photo">
            <img src="https://cl.ly/230X330Z0X1S/avatar02.png" alt="ryangomba" />
          </div>
          <span className="person-name">ryangomba</span>
          <span className="comment-content">Wow! those clouds are great!</span>
        </div>
      </div>
    )
  }
}
