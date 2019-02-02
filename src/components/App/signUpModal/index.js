import React,{ Component } from 'react';
import './index.css';

class SignUpModal extends Component {
    constructor(){
        super();
        //this.onClickB=this.onClickB.bind(this);
        this.onClickN=this.onClickN.bind(this);
    }

    render() {
        return (
            <div>
  {/* <button onClick={this.onClickB} style={{ width: "auto" }} className="b1">Login</button> */}
  <div id="id02" className="modal">
    <form className="modal-content animate" action="/action_page.php">
    <button
          onClick={this.onClickN}
          className="close1"
          title="Close Modal">×</button>
        <br></br>
      <div className="imgcontainer">
        
        <img src={require('./img_login.png')} alt="Avatar" className="avatar" />
      </div>
      <div className="container">
      <label htmlFor="email">
          <b>Enter your E-mail</b>
        </label>
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          required
        />
        <label htmlFor="uname">
          <b>Enter your Username</b>
        </label>
        <input
          type="text"
          placeholder="Username"
          name="uname"
          required
        />
        <label htmlFor="psw">
          <b>Enter Password</b>
        </label>
        <input
          type="password"
          placeholder="Password"
          name="psw"
          required
        />
        <label htmlFor="repsw">
        <b>Re-enter your Password</b>
        </label>
        <input
          type="password"
          placeholder="Re-enter Password"
          name="repsw"
          required
        />
        <button type="submit">Submit</button>
        <br></br>
        <label>
          <input
            type="checkbox"
            defaultChecked="checked"
            name="TandC"
          />{" "}
          I agree to the terms and conditions.
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
          Forgot Password <a href="#">password?</a>
        </span>
      </div>
    </form>
  </div>
  </div>
)
}
onClickN(event) {
  var modal = document.getElementById('id02');
        modal.style.display = "none";
}

// onClickB(event) {
//   var modal = document.getElementById('id02');
//   modal.style.display = "block";
// }

}

export default SignUpModal;