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

    //将喜欢的人提交到服务器
    //再从服务器获取喜欢的人数，重新渲染组件的内容
    function handlePost(event){
      event.preventDefault();
      var data = {
          "id": 0,
          "name": "string",
          "Url": "string",
          "likeStatus": true,
          "createdBy": {
            "id": 0,
            "name": "string",
            "avatarUrl": "string"
          },
          "commentsInfo": {
            "id": 0,
            "createdBy": {
              "id": 0,
              "name": "string",
              "avatarUrl": "string"
            },
            "createdAt": "2017-11-24T16:40:48.408Z",
            "content": "string"
          }
        };

      fetch('http://localhost:8080/api/likes/like', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then((res) => {console.log(res)})
    }
    handlePost(e);

    // function GetDataFromPost(){
    //   fetch('http://localhost:8000/api/likes', {
    //     method: 'get'
    //   }).then((response) => {
    //     if (response.status !== 200) {
    //       console.log('Looks like there was a problem. Status Code: ' + response.status);
    //       return;
    //     }
    //     response.json().then((like) => {
    //       this.setState((preState) => {
    //         num: preState.num + 1
    //       })
    //         console.log(like)
    //       });
    //   }).catch(function(err){
    //     console.log(err);
    //   });
    // }
    // GetDataFromPost();
  }

  // componentDidMount(){
  //   fetch('http://localhost:8000/api/likes', {
  //     method: 'get'
  //   }).then((response) => {
  //     if (response.status !== 200) {
  //       console.log('Looks like there was a problem. Status Code: ' + response.status);
  //       return;
  //     }
  //     response.json().then((like) => {
  //       this.setState((preState) => {
  //         num: preState.num + 1
  //       })
  //         console.log(like)
  //       });
  //   }).catch(function(err){
  //     console.log(err);
  //   });
  // }


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
