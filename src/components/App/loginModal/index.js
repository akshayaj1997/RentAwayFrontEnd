import React,{ Component } from 'react';
import './login.css';

class LoginModal extends Component {
    constructor(){
        super();
        //this.onClickB=this.onClickB.bind(this);
        this.onClickN=this.onClickN.bind(this);
        this.handleUname=this.handleUname.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.login=this.login.bind(this)
        this.state = { 
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
      e.preventDefault();
      let url='http://localhost:9000/users/signin'
      let obj={}
      obj.username= this.state.email
      obj.passwordHash = this.state.password
      fetch(url,{
        header: {
          "Content-Type": "application/json"
        },
        method:'PUT',
        body:JSON.stringify({obj})

      }
      ).then(function (response) {
        console.log(response);
        if(response.data.code == 200){
        console.log("Login successfull");
        }
        else if(response.data.code == 204){
        console.log("Username password do not match");
        alert("username password do not match")
        }
        else{
        console.log("Username does not exists");
        alert("Username does not exist");
        }
        })
        .catch(function (error) {
        console.log(error);
        });
     
      console.log(this.state)
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