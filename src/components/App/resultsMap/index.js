import mapboxgl from 'mapbox-gl';
import React,{Component} from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';

var body;
class ResultMaps extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
              width:1100,
              height: 1300,
              latitude: 0,
              longitude: 0,
              zoom: 2.5
            },
            latitude:0,
            longitude:0,
            data: [],
           homeId : ' ',
           location : ' ',
           name:' ',
           price:' ',
           guestCount:'',
           toDate:'',
           fromDate:'',
           Amen1:[],
           imageUrls:[]
          };
          
    }

    componentDidMount(){
        //this.setState({Amen1:this.props.history.location.state.Amen1})
        const url = "http://10.10.200.24:9000/homes1";
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
                          sessionStorage.getItem('LatPlace',parseFloat(this.state.data.latitude))
                          sessionStorage.getItem('LongPlace',parseFloat(this.state.data.longitude))
     })
     .catch(()=> console.log("can't access" + url + "response. "))
     }
   
    
    
      render() {
        return (
            <div style={{float:'right'}}>
          <ReactMapGL
          width='60%'
          height='40%'
            {...this.state.viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken='pk.eyJ1IjoibmlkaGlwYXZ1bHVyaSIsImEiOiJjanRqcGQ3eDEwMWE3M3ltamdzYnlpc2syIn0.Iw2YRzOYRS7mBJNmykVa6g'>
             {this.state.data.map((home,index) => {
                 return(
                     <div>
            <a href={'http://localhost:3000/detailsPage/'+home.homeId} >
             <Popup latitude={parseFloat(home.latitude)} longitude={parseFloat(home.longitude)} sortByDepth={true} >
          <div>
              <i class="fas fa-home"></i>
              <br/>
              {home.location}
              <br/>
              &#8377;{home.price}
          </div>
          </Popup>
          </a>
          </div>)
          })}
        </ReactMapGL>
        </div>
        );
      }
}

export default ResultMaps;