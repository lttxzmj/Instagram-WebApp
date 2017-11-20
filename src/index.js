import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from '../components/comment-box/index.jsx'
import '../css/normalize.css'
import '../css/index.css'
import '../css/mixin.sass'

function App() {
  return (
    <CommentBox />
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App /> , root)
