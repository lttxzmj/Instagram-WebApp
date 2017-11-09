import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function CommentBox() {
  const bgURL ="https://cl.ly/3m2k410K1H32/pic01.jpg";
  return (
    <div className="comment-box">
      <div className="pic-container">
        <img src={bgURL} alt="city in the night" />
      </div>

    </div>
  );
}

export default CommentBox;
