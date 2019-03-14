import React, {Component} from 'react';
import './results.css';
import ImageCarousel from '../imageCarousel';
import {createBrowserHistory as createHistory} from 'history';
var body;
class SearchResults extends Component {
   history=createHistory(this.props);
    constructor(props){
        super(props);
        this.state = {
           data: [],
           homeId : ' ',
           location : ' ',
           name:' ',
           price:' ',
           guestCount:'',
           toDate:'',
           fromDate:'',
           Amen1:[]
           }
           this.onForwardClick=this.onForwardClick.bind(this);
     }
     onForwardClick(id) {
      const path= '/resultsPage' //instead add detailsPage URL if it doesnt work
        //this.history.push(path)
     }
     componentDidMount(){
        //this.setState({Amen1:this.props.history.location.state.Amen1})
        const url = "http://10.10.200.32:9000/homes1";
        if(sessionStorage.getItem('location1')=="null"){
           this.state.location=null;
        }
        else{
           this.state.location=sessionStorage.getItem('location1')
        }
        if(sessionStorage.getItem('guestCount')=="null"){
         this.state.guestCount=null;
      }
      else{
         this.state.guestCount=sessionStorage.getItem('guestCount')
      }

      if(sessionStorage.getItem('fromDate')=="null" && sessionStorage.getItem('toDate')!="null" ){
         body={
            location:this.state.location,
             guestCount:this.state.guestCount,
             toDate:sessionStorage.getItem('toDate'),
             price:sessionStorage.getItem('price'),    
             amenities:JSON.parse(sessionStorage.getItem('amenities')),
             amenities:JSON.parse(sessionStorage.getItem('rules')),
             propertyType:JSON.parse(sessionStorage.getItem('propertyType'))
       }
       
      }

      if(sessionStorage.getItem('fromDate')!="null" && sessionStorage.getItem('toDate')=="null" ){
         body={
            location:this.state.location,
             guestCount:this.state.guestCount,
             fromDate:sessionStorage.getItem('fromDate'),
             price:sessionStorage.getItem('price'),
             amenities:JSON.parse(sessionStorage.getItem('amenities')),
             amenities:JSON.parse(sessionStorage.getItem('rules')),
             propertyType:JSON.parse(sessionStorage.getItem('propertyType'))
       }
      }
         
      if(sessionStorage.getItem('fromDate')=="null" && sessionStorage.getItem('toDate')=="null"){
            console.log("1");
            body={
              location:this.state.location,
               guestCount:this.state.guestCount,
               price:sessionStorage.getItem('price'),
              amenities:JSON.parse(sessionStorage.getItem('amenities')),
              amenities :JSON.parse(sessionStorage.getItem('rules')),
              propertyType:JSON.parse(sessionStorage.getItem('propertyType'))
         }
         console.log("2");
      }
      else{
         console.log("3");
            body={
           location:this.state.location,
           guestCount:this.state.guestCount,
           toDate:sessionStorage.getItem('toDate'),
           fromDate:sessionStorage.getItem('fromDate'),
           price:sessionStorage.getItem('price'),
           amenities:JSON.parse(sessionStorage.getItem('amenities')),
            amenities:JSON.parse(sessionStorage.getItem('rules')),
            propertyType:JSON.parse(sessionStorage.getItem('propertyType'))
        }
        console.log(body)
      }

        
       
       
        let headers = new Headers();
     
        headers.append('Content-Type','application/json');
        headers.append('Accept','application/json');
     
        headers.append('Access-Control-Allow-origin',url);
        headers.append('Access-Control-Allow-Credentials','true');
     
        headers.append('GET','POST');
     
        fetch(url, {
           headers:headers,
           method: 'POST',
           body:JSON.stringify(body)

        })
        .then(response => response.json())
        .then(contents => {console.log("in fetch"+contents);
                          this.setState({
                             data:contents
                          })
     })
     .catch(()=> console.log("can't access" + url + "response. "))
     }
     
        render() {  

            return (
               <div>
                  <ul>
                     
                     {this.state.data.map((home,index) => {
               const id = `${home.homeId}`
               // const path= `/detailsPage/`+id
               return(
                  <li key={index}>
                  <a href={'http://localhost:3000/detailsPage/'+id} onClick={this.onForwardClick(id)}>
                  <div class="card1">
                  <div className="car">
                  <ImageCarousel/>
                  </div>
                     {/* <img src={require('./images.png')} alt="Avatar" className='image' /> */}
                     <div class="container">

                      <p className='type1'>{home.propertyType} </p>
                      <p className='location'>{home.homeName} </p>
                      <p className='location'>{home.location}</p>
                      <p className= 'cost'> &#8377; {home.price}</p>
                      </div>
                  </div>
                   </a>
                   </li>
               )
            })}
            </ul>
             </div>
                )
        }
}

export default SearchResults;