import React, {Component} from 'react';
import NavBar from '../navBar';
import UserNavBar from '../userNavbar';
class  CondNavBar extends React.Component{

    
    render(){
        if(localStorage.getItem('role')==='USER')
        {
            return(<UserNavBar/>)
            
        }
       else {
           return(<NavBar/>)
       }
    }

    }

export default CondNavBar;