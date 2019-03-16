import React from "react";
 import './listings.css';
import {Button } from 'reactstrap';

class Listings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      homeId:'',
      homeName : ' ',
      propertyType:' ',
      location: ' '
      }
  }
    
   componentDidMount(){
     
        console.log("entered");
        console.log(typeof localStorage.getItem('id'))
       let body = {
      
            username : localStorage.getItem('id')
         
        }
        console.log("Listings"+body);
        const url = "http://10.10.200.24:9000/homelist";
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
          if(response.status===401)
              {
                alert("Unauthorized");
                window.location.reload();
              }
              response.json()
              .then((responseData)=>{
                                     console.log(responseData[0].homeId)
                                     this.setState({data:responseData})
              })})
              
        .then(contents => {console.log("in fetch"+contents);
                    
                          
     })
     .catch(()=> console.log("can't access" + url))
     
      }

      
    render(){  
      return( 
        <div className='ViewListings'>
  
        <ul>
          <br/>
           {this.state.data.map((home,index) => {
     return(
        <li key={index}>
      <i><b>{home.homeName}</b> </i>   <input type='button' style={{backgroundColor:'#DC143C',width:'150px',borderRadius:'10%',fontWeight:'200px'}} className='DeleteListing' value='Delete Listing'></input>
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


export default Listings;