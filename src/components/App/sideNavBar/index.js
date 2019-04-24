import React from "react";


class SideNavBar extends React.Component{

  constructor(props)
  {
    super(props);
    this.SignOut=this.SignOut.bind(this)
  }
  SignOut(){
   


    const url = "http://localhost:9000/users/signout";
    var bearerToken = localStorage.getItem('accessToken');
    var accesstoken = 'Bearer ' + bearerToken;
    console.log(accesstoken);
  

    fetch(url, {
        method: 'PUT',
        withCredentials:true,
     credentials:'include',
     headers:{
       'Authorization':accesstoken,
     },
    })
        .then(response => response.json())
        
        .catch(() => console.log("can't access" + url + "response. "))


    window.location.assign("http://localhost:3000/Landing");
    localStorage.clear();
    
  }

 
    
    render(){
      return( 
        <div style={{width:'20%', background:'white', position:'fixed', height:'100%',color:'Black',fontWeight:'50px'}}>
        <i class="fa fa-heartbeat fa-4x" style={{color:'gold', paddingLeft:'4%'}}></i>  <center><i style={{fontSize:'16px'}}>Care that never quits.</i></center> 
        <br/> <br/>
        <hr/>
        <div style={{fontSize:'16px', paddingLeft:'4%',paddingBottom:'20px'}}>
            Welcome, {localStorage.getItem('username')}
        </div>
        <div style={{fontSize:'16px', paddingLeft:'4%', paddingTop:'10%'}}>
            <h1>Dashboard</h1>
            <br/>
            <a href="http://localhost:3000/homePreSignin"><i class="fas fa-user-injured fa-2x" style={{color:'gold', paddingRight:'4%'}}></i> New Cases </a><br/><br/>
           
           <a href="http://localhost:3000/accidentMap"> <i class="fas fa-search-location fa-2x" style={{color:'gold', paddingRight:'4%'}}></i> 
            Location </a><br/> <br/>
            <i class="fas fa-history fa-2x" style={{color:'gold', paddingRight:'4%'}}></i> History<br/> <br/>
        </div>

        
        <button onClick={this.SignOut} style={{backgroundColor:'white',color:'black'}}>
                    <i class="fa fa-sign-out fa-2x"></i> Sign Out
                  </button>
       
        </div>
        
      )
    }
  }


export default SideNavBar;