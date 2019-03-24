import mapboxgl from 'mapbox-gl';
import React,{Component} from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';

class MapsDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
              width: 750,
              height: 500,
              latitude: parseFloat(sessionStorage.getItem('LatPlace')),
              longitude: parseFloat(sessionStorage.getItem('LongPlace')),
              zoom: 12

            },
            latitude:parseFloat(sessionStorage.getItem('LatPlace')),
            longitude:parseFloat(sessionStorage.getItem('LongPlace')),
          };
          
    }
   
    
    
      render() {
        return (
          <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v11"
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken='pk.eyJ1IjoibmlkaGlwYXZ1bHVyaSIsImEiOiJjanRqcGQ3eDEwMWE3M3ltamdzYnlpc2syIn0.Iw2YRzOYRS7mBJNmykVa6g'>
             <Popup latitude={this.state.latitude} longitude={this.state.longitude} >
          <div><i class="fas fa-home"></i></div>
          </Popup>
        </ReactMapGL>
        );
      }
}

export default MapsDetails;