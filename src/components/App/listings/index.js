import React from "react";
// import './profile.css';
import ProfileTabs from "../profileTabs";

class Listings extends React.Component{
    
    editProfile(event){
        console.log("entered");
       
       let body = {
      
            username : localStorage.getItem('id'),
         
        }
        console.log("edit profile"+body);
    
        
        
     
        const url = "http://10.10.200.32:9000/homelist";
        let headers = new Headers();
     
        headers.append('Content-Type','application/json');
        headers.append('Accept','application/json');
     
        headers.append('Access-Control-Allow-origin',url);
        headers.append('Access-Control-Allow-Credentials','true');
     
        headers.append('GET','POST');
     
        fetch(url, {
           headers:headers,
           method: 'POST',
           body: JSON.stringify(body)
        })
        .then(response => {
          console.log(response.status);
          if(response.status===200)
              {
                window.location.reload();
              }
              else if(response.status===400){
                alert("Username already exists");
                window.location.reload();
              }
              else if(response.status===401){
                alert("Username or password is incorrect");
                window.location.reload();
              }
              else{
                alert("Unauthorized");
                window.location.reload();
              }})
        .then(contents => {console.log("in fetch"+contents);
                    
                          
     })
     .catch(()=> console.log("can't access" + url))
     
      }
    render(){
      return( 
        <div className='profilebg'>
        <div className='Tabprof'>
        <ProfileTabs/>
        </div>
        </div>
        
      )
    }
  }


export default Listings;