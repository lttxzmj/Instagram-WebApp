import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CommentContent from '../comment-content/index.jsx'

export default class CommentBox extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="comment-box">
        <div className="pic-container">
          <img src="https://cl.ly/3m2k410K1H32/pic01.jpg" alt="city in the night" />
        </div>
        <CommentContent />
      </div>
    )
  }
}
