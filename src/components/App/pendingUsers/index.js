import React from "react";
 
import {Button } from 'reactstrap';

class PendingUsers extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      
      }
  }
    onDelete(id){
      const url = "http://10.10.200.24:9000/homes/users/"+id;
      let headers = new Headers();
     console.log(url)
      headers.append('Content-Type','application/json');
      headers.append('Accept','application/json');
   
      headers.append('Access-Control-Allow-origin',url);
      headers.append('Access-Control-Allow-Credentials','true');
   
     // headers.append('','POST');
   
      fetch(url, {
         headers:headers,
         method: 'DELETE',
         //body: JSON.stringify(body)
      })
      .then(response => {
        console.log(response.status);
        if(response.status===401)
            {
              alert("Unauthorized");
              window.location.reload();
            }
            })
            
      .then(contents => {console.log("in fetch "+contents);
                  
                        
   })
   .catch(()=> console.log("can't access" + url))
   window.location.reload()
      
    }
   componentDidMount(){
     
    const url = "http://10.10.200.24:9000/pendingUsers";
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('GET','POST','PUT');
 
    fetch(url, {
       headers:headers,
       method: 'GET',
    })
    .then(response => {
      console.log(response.status);
            response.json()
                    .then((responseData)=>{
                      console.log("User "+responseData[0].user.userId)
                      this.setState({
                        data: responseData,
                        
                      })                      
                    })   
                      
 })
 .catch(()=> console.log("can't access " + url))
     
      }

      
    render(){  
      return( 
        <div className='ViewListings'>
  
        <ul>
          <br/>
           {this.state.data.map((home,index) => {
     return(
        <li key={index} style={{fontSize:'20px'}}>
      <i><b>{home.user.username}</b> </i>   <div style={{float:'right'}}><input type='button' style={{backgroundColor:'#FF4C4C',color:'white',fontSize:'16px',fontStyle:'oblique'}} className='listbutton' value='Delete Listing' ></input>  &nbsp; <input type='button' style={{backgroundColor:'#32CD32',color:'white',fontSize:'16px',fontStyle:'oblique'}} className='listbutton' value='Confirm Listing'></input></div>
        <br/>
        <br/>
         </li>
     )
  })}
  </ul>
   </div>
        
      )
    }
  }


export default PendingUsers ;