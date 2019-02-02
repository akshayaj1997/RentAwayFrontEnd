import React from "react";
import "./index.css"
import SignUpModal from "../signUpModal";


class NavBar extends React.Component {

    constructor(){
        super();
        this.myFunction=this.myFunction.bind(this);
    }

    render() {
        return (
            <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  
  <div className="dropdown">
    <button className="dropbtn">Dropdown 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  <a href="#about">About</a>
  <a href="#" className="icon" onClick={this.myFunction}>&#9776;</a>
  <SignUpModal/>
</div>
            
        );

    }

    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } 
        else {
          x.className = "topnav";
        }
      }
}

export default NavBar; 