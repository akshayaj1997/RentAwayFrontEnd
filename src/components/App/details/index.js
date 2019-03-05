import React, {Component} from 'react';

import ImageCarousel from '../imageCarousel';
import './details.css';


class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
           data: [],
         //   id : `${this.props.match.params.id}`,
           carParking: ' ',
           wifi: ' ',
           pool: ' ',
           heater: ' ',
           kitchen: ' ',
           airConditioner: ' '      
        }
     
     }
     
     componentDidMount(){
         const i =`${this.state.data.id}`
        const url = `http://10.10.200.24:9000/amenities`;
        let headers = new Headers();
     
        headers.append('Content-Type','application/json');
        headers.append('Accept','application/json');
     
        headers.append('Access-Control-Allow-origin',url);
        headers.append('Access-Control-Allow-Credentials','true');
     
        headers.append('GET','POST');
     
        fetch(url, {
           headers:headers,
           method: 'GET'
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
            <div className="Image">
           <ImageCarousel/>
           {this.state.data.map((home,index) => {
               const id = `${home.id}`
               // const path= `/detailsPage/`+id
               return(
                  <li key={index}>
                  
                     {/* <img src={require('./images.png')} alt="Avatar" className='image' /> */}
                     <div class="container">
                      <p className='type1'>{home.carParking}</p>
                      <p className='location'>{home.pool}</p>
                      <p className='name1'></p>
                      <p className= 'cost'> {home.airConditioner}</p>
                      </div>
                   </li>
               )
            })}
            </div>
           <p>
           </p>
           </div>
        )
    }
}

export default Details;