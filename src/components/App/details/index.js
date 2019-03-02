import React, {Component} from 'react';

import ImageCarousel from '../imageCarousel';
import './details.css';


class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
           data: [],
         //   id : `${this.props.match.params.id}`,
           id:" ",
           fromDate:' ',
           location : ' ',
           name:' ',
           price:' ',
           toDate:' ',
           amenities:[]
           
        }
     
     }
     
     componentDidMount(){
         const i =`${this.state.data.id}`
        const url = `http://10.10.200.24:9000/homes`;
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
            </div>
           <p>
           </p>
           </div>
        )
    }
}

export default Details;