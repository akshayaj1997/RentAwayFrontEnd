import React,{ Component } from 'react';
import './index.css';

class SignUpModal extends Component {
    constructor(){
        super();
        this.onClickB=this.onClickB.bind(this);
        this.onClickN=this.onClickN.bind(this);
    }

    render() {
        return (
            <div>
  <button onClick={this.onClickB} style={{ width: "auto" }} className="b1">Login</button>
  <div id="id01" className="modal">
    <form className="modal-content animate" action="/action_page.php">
    <button
          onClick={this.onClickN}
          className="close1"
          title="Close Modal">×</button>
        <br></br>
      <div className="imgcontainer">
        
        <img src={require('/Users/akshaya/Downloads/rent/src/components/App/signUpModal/Loki.jpeg')} alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
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
          Forgot Password <a href="#">password?</a>
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

onClickB(event) {
  var modal = document.getElementById('id01');
  modal.style.display = "block";
}

}

export default SignUpModal;