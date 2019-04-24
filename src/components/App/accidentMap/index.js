import mapboxgl from 'mapbox-gl';
import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder'

import './resultsmap.css';
import SideNavBar from '../sideNavBar';
var body;
class AccidentMaps extends Component {
   mapRef = React.createRef()
   geocoderContainerRef = React.createRef();
   constructor(props) {
      super(props);
      this.state = {
         viewport: {
            width: 2300,
            height: 1300,
            latitude: 21,
            longitude: 73,
            zoom: 4,
         },
         latitude: 0,
         longitude: 0,
         data: [],
         username:"",
         status:"",
          role:"",
         state:"",
         accessToken: null,
         name: null,
         gender: null,
         mobilenbr: null,
         aadharcard: null,
         address: null,
         
      };

   }

  




   componentDidMount() {
    
          console.log("entered");
          console.log(typeof localStorage.getItem('id'))
         
          console.log("Listings"+body);
          const url = "http://localhost:9000/allUsers";
          let headers = new Headers();
       
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
       
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
       
          headers.append('GET','POST');
       
          fetch(url, {
             headers:headers,
             method: 'GET',
             
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
                                       
                                       this.setState({data:responseData})
                                
                })})
                
          .then(contents => {console.log("in fetch"+contents);
                      
                            
       })
       .catch(()=> console.log("can't access" + url))
   }



   render() {
      return (
         <div ref={this.geocoderContainerRef1} style={{ float: 'right' }}>
         
            <ReactMapGL
               width='60%'
               height='40%'
               ref={this.mapRef}
               {...this.state.viewport}
               mapStyle="mapbox://styles/mapbox/streets-v11"
               onViewportChange={(viewport) => this.setState({ viewport })}
               mapboxApiAccessToken='pk.eyJ1IjoibmlkaGlwYXZ1bHVyaSIsImEiOiJjanRqcGQ3eDEwMWE3M3ltamdzYnlpc2syIn0.Iw2YRzOYRS7mBJNmykVa6g' >
               {this.state.data.map((user, index) => {
                   if(user.role==='USER'&& user.status==='ACTIVE') {
                     return (
                        <div>
                           <Popup latitude={parseFloat(user.latitude)} longitude={parseFloat(user.longitude)} sortByDepth={true} closeButton={false}>
                              <div>
                                 <div>
                                 <i class="fas fa-car-crash"></i>
                                 </div>

                              </div>
                           </Popup>
                        </div>)}
                  }
               )}
               <Geocoder
                  containerRef={this.geocoderContainerRef1}
                  mapRef={this.mapRef}
                  onViewportChange={(viewport) => this.setState({ viewport })}
                  mapboxApiAccessToken='pk.eyJ1IjoibmlkaGlwYXZ1bHVyaSIsImEiOiJjanRqcGQ3eDEwMWE3M3ltamdzYnlpc2syIn0.Iw2YRzOYRS7mBJNmykVa6g'
               />
            </ReactMapGL>
         </div>
      );
   }
}

export default AccidentMaps;