import React from 'react'
import ReactDOM from 'react-dom'
import ListItem from '../list-item/index.jsx'

export default class CommentList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const data = this.props.data;
    const listItem = data.map((item, index) => <ListItem item={item} key={index}/>)

    return(
      <div className="comment-detail">
        {listItem}
      </div>
    )
  }
}
