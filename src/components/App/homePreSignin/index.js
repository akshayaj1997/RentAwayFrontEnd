import React from "react";
//import HomeSearch from ".App/homeSearch";
//import {Navbar, Nav, NavItem, NavDropdown,MenuItem} from 'react-bootstrap';
//import NavBar from "../NavBar";
import Image from "../image"

class HomePreSignin extends React.Component{
  componentDidMount(){
    if(sessionStorage.getItem("BookName")) {
      console.log('Hello')
        
     
      sessionStorage.removeItem("BookName")
    }
    sessionStorage.removeItem('price');
    sessionStorage.removeItem('propertyType');
    sessionStorage.removeItem('amenities');
    sessionStorage.removeItem('rules');
  }
    
    render(){
      return( 
        <div>
        <Image/>  
        </div>
        
      )
    }
  }


export default HomePreSignin;