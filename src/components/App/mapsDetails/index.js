import mapboxgl from 'mapbox-gl';
import React,{Component} from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';

class MapsDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
              width: 400,
              height: 200,
              latitude: parseFloat(sessionStorage.getItem('LatPlace')),
              longitude: parseFloat(sessionStorage.getItem('LongPlace')),
              zoom: 8
            },
            latitude:parseFloat(sessionStorage.getItem('LatPlace')),
            longitude:parseFloat(sessionStorage.getItem('LongPlace')),
          };
          
    }
   
    
    
      render() {
        return (
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken='pk.eyJ1IjoibmlkaGlwYXZ1bHVyaSIsImEiOiJjanRqcGQ3eDEwMWE3M3ltamdzYnlpc2syIn0.Iw2YRzOYRS7mBJNmykVa6g'>
             <Marker latitude={this.state.latitude} longitude={this.state.longitude} offsetLeft={-20} offsetTop={-10} >
          <div><i class="fas fa-home"></i></div>
          </Marker>
        </ReactMapGL>
        );
      }
}

export default MapsDetails;