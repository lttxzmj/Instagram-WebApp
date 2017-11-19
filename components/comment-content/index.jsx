import React from 'react'
import ReactDOM from 'react-dom'
import Like from '../like/index.jsx'
import CommentList from '../comment-list/index.jsx'
import CommentForm from '../comment-form/index.jsx'

export default class CommentContent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Like />
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}
