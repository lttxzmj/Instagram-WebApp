import React from 'react'
import ReactDOM from 'react-dom'

export default class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.like.length !== nextProps.like.length) {
      this.setState({ num: nextProps.like.length });
    }
  }

  handleClick(e){
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render(){
    return(
      <div className="likes-container">
        <div className="likes-icon center" onClick={this.handleClick}>
          {
            this.state.isToggleOn
            ? <i className="fa fa-heart-o active" aria-hidden="true"></i>
            : <i className="fa fa-heart-o" aria-hidden="true"></i>
          }
        </div>
        <p className="likes-people center">
          <span>amy</span>,<span>grex</span> and <span>{this.state.num >= 3 ? this.state.num + ' others ' : this.state.num}</span> like this
        </p>
        <div className="more center">
           <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
