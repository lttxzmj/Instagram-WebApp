import React from 'react'
import ReactDOM from 'react-dom'
import Like from '../like/index.jsx'
import CommentList from '../comment-list/index.jsx'
import CommentForm from '../comment-form/index.jsx'

export default class CommentContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    var that = this;
    fetch('http://localhost:8000/api/comment', {
      method: 'get'
    }).then(function(response){
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data){
          that.setState({
            data: data
          });
        });
    }).catch(function(err){
      console.log(err);
    });
  };


  render(){
    return(
      <div className="comment-status">
        <Like />
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    )
  }
}
