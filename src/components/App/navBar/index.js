import React from "react";
import "./index.css";
import LoginModal from "../loginModal";
import signUpModal from '../signUpModal';
import SignUpModal from "../signUpModal";
//import { createRequireFromPath } from "module";



class NavBar extends React.Component {
    constructor(){
        super();
        this.myFunction=this.myFunction.bind(this);
        this.onClickB=this.onClickB.bind(this);
        this.onClickN=this.onClickN.bind(this);
        
    }

    render() {
        return (
            <div className="topnav" id="myTopnav">
            <a href="#home"><img src={require('./Capture.png')} width='120' height='40'  /></a>
            <a href="#" className="rightt" onClick={this.onClickB}>Login</a>
            <LoginModal/>
            <a href="#" className="rightt" onClick={this.onClickN}>SignUp </a>
            <SignUpModal/>
            <a href="#about" className="rightt">Become a host</a>
          
            <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
              <i className="fa fa-bars"></i>
            </a>
            
          </div>
          
        );

    }
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

      onClickB(event) {
        var modal = document.getElementById('id01');
        modal.style.display = "block";
        
      }
      onClickN(event) {
        var modal = document.getElementById('id02');
        modal.style.display = "block";
        
      }
      
    
}

export default NavBar; 