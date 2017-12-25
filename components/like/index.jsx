import React from 'react'
import ReactDOM from 'react-dom'

export default class Like extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="likes-container">
        <div className="likes-icon center">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <p className="likes-people center">
          <span>amy</span>,<span>grex</span> and <span>21 others</span> like this
        </p>
        <div className="more center">
           <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
