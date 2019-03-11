import React,{ Component } from 'react';
import './login.css';
import {createBrowserHistory as createHistory} from 'history';
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import UserNavBar from "../userNavbar";
class LoginModal extends Component {
  history=createHistory(this.props);
    constructor(props){
        super(props);
        //this.onClickB=this.onClickB.bind(this);
        this.onClickN=this.onClickN.bind(this);
        this.handleUname=this.handleUname.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.login=this.login.bind(this)
        this.state = { 
          data:[],
          username: ' ',
          passwordHash:' '
        }
    }

    handleUname(e) {
      this.setState({
        username: e.target.value
      })
    }
    handlePassword(e) {
      this.setState({
        passwordHash: e.target.value
      })
    }
    login(e) {
      let { history } = this.props;
     //e.preventDefault();
      let url='http://localhost:9000/users/signin'
      let obj={}
      obj.username= this.state.username
      obj.passwordHash = this.state.passwordHash
      console.log(obj)
      fetch(url,{
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-origin':url,
          'Access-Control-Allow-Credentials':'true'

        },
        method:'PUT',
        body: JSON.stringify(obj)

      }
      ).then(response => {
        console.log(response.status);
       response.json()
              .then((responseData)=>{localStorage.setItem('accessToken',responseData.accessToken)
                                     localStorage.setItem('role',responseData.role)
                                      this.setState(
                                        {accessToken:responseData.accessToken,
                                          role:responseData.role
                                        }
                                      )
                                      console.log("bearerToken:"+this.state.accessToken)
                                      //localStorage.setItem('accessToken',this.state.accessToken)
            
            if(response.status===200)
            {
              console.log("hellllllll")
              history.push({
                pathname: '/userPage'
               })
               
            }
            })
        })
        .then(contents => {console.log("in fetch "+contents);
                          this.setState({
                             data:contents
                          })
     })
        .catch(function (error) {
        console.log(error);
        });
     
      
    }

    render() {
        return (
            <div>
  <div id="id01" className="modal">
    <form className="modal-content animate" onSubmit={this.login}>
    <button
          onClick={this.onClickN}
          className="close1"
          title="Close Modal">×</button>
        <br></br>
      <div className="imgcontainer">
        
        <img src={require('./img_login.png')} alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChangeCapture={this.handleUname}
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChangeCapture={this.handlePassword}
          required
        />
        <button type="submit">Login</button>
        <br></br>
        <label>
          <input
            type="checkbox"
            defaultChecked="checked"
            name="remember"
          />{" "}
          Remember me
        </label>
      </div>
      <div
        className="container"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <button
          type="button"
          onClick={this.onClickN}
          className="cancelbtn"
        >
          Cancel
        </button>
        <span className="psw">
          Forgot Password 
          <br></br>
          <a href="#"><center><h6>Password Hint</h6></center></a>
        </span>
      </div>
    </form>
  </div>
  </div>
)
}
onClickN(event) {
  var modal = document.getElementById('id01');
        modal.style.display = "none";
}

// onClickB(event) {
//   var modal = document.getElementById('id01');
//   modal.style.display = "block";
// }

}

export default LoginModal;