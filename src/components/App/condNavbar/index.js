import React, {Component} from 'react';
import NavBar from '../navBar';
import UserNavBar from '../userNavbar';
import HostNavBar from '../hostNavBar';
class  CondNavBar extends React.Component{

    
    render(){
        if(localStorage.getItem('role')==='USER')
        {
            return(<UserNavBar/>)
            
        }
        else if(localStorage.getItem('role')==='HOSPITAL')
        {
            return(<HostNavBar/>)
        }
       else {
           return(<NavBar/>)
       }
    }

    }

export default CondNavBar;