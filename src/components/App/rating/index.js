import React from "react";
import {Button } from 'reactstrap';
import ReactStars from 'react-stars';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
class Ratings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      homeName : ' ',
      toDate:'',
      homeId:'',
      rating:0
      }
  }

  changeRating(newRating,name) {
    this.setState({rating:newRating})
    console.log(name)
    let body = {

        homeId: name ,
        rating:newRating
         
       
      }
     
   
      const url = "http://10.10.200.24:9000/rating";
      let headers = new Headers();
      var bearerToken = localStorage.getItem('accessToken');
  
  var accesstoken = 'Bearer ' + bearerToken;
   
      headers.append('Content-Type','application/json');
      headers.append('Accept','application/json');
   
      headers.append('Access-Control-Allow-origin',url);
      headers.append('Access-Control-Allow-Credentials','true');
   
      headers.append('GET','POST');
   
      fetch(url, {
        headers: headers,
        method: 'POST',
        withCredentials:true,
        credentials:'include',
        headers:{
          'Authorization':accesstoken,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': url
        },
        body: JSON.stringify(body) 
    })
      .then(response => {
        console.log(response.status);
    
            })
      .then(contents => {console.log("in fetch"+contents);
                  
                        
   })
   .catch(()=> console.log("can't access" + url + "response. "))
   
    }


  
   componentDidMount(){
   const url="http://10.10.200.24:9000/bookingsByUser/"+localStorage.getItem('id')
    
  

    fetch(url, {
        method: 'GET',
       
    })
        .then(response => response.json()
        .then((responseData)=>{
          console.log("ratings "+typeof responseData);
          this.setState({
            data: responseData,
          })
          console.log("data"+typeof this.state.data)
        }))
        
        .catch(() => console.log("can't access" + url + "response. "))
        
      }

      
    render(){  
      return( 
        <div className='ViewListings'>
          <ul>
          {new Set(this.state.data[0])}
          {new Set(this.state.data[2])}
          <br/>
           {this.state.data.map((home,index) => {
            if(moment(home[2]).dayOfYear()<moment().dayOfYear()){
     return(
        <li key={index}>
      <h3>{home[1]}
      <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating.bind(this)}
          numberOfStars={5}
          name={home[0]}
        />

      </h3>
      
        <br/>
        <br/>
         </li>
     )}
     })}
  </ul>
   </div>
        
      )
    }
  }


export default Ratings;