import React from 'react'
import ReactDOM from 'react-dom'

export default class ListItem extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const item = this.props.item;
    return(
      <div className="comment-item item-1">
        <div className="person-photo">
          <img src="https://cl.ly/231z0K3c2A1c/avatar01.png" alt={this.props.item.createdBy.name} />
        </div>
        <span className="person-name">{this.props.item.createdBy.name}</span>
        <span className="comment-content">{this.props.item.content}</span>
      </div>
    )
  }
}
