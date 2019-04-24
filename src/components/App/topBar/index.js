import React from "react";


class TopBar extends React.Component{
  componentDidMount(){
    if(sessionStorage.getItem("BookName")) {
      
      sessionStorage.removeItem("BookName")
    }
    sessionStorage.removeItem('price');
    sessionStorage.removeItem('propertyType');
    sessionStorage.removeItem('amenities');
    sessionStorage.removeItem('rules');
  }
    
    render(){
      return( 
        <div style={{width:'100%', background:'black', position:'fixed', height:'50px',color:'white',fontWeight:'50px'}}>
       <h1 style={{paddingTop:'10px'}}><center>Welcome to Salus..</center></h1>
        </div>
        
      )
    }
  }


export default TopBar;