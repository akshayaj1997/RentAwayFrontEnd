import React, {Component} from 'react';
import './results.css'

class SearchResults extends Component {
    constructor(props){
        super(props);
        this.state = {
           data: [],
           id : ' ',
           location : ' ',
           fromDate:' ',
           toDate:' ',
           guestCount:' '
        }
     
     }
     
     componentDidMount(){
        const url = "http://10.10.200.42:9000/homes";
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
                     <a href= "#"><div class="card">
                     <img src={require('./images.png')} alt="Avatar" className='image' />
                     <div class="container">
                      <p className='type1'>Type</p>
                      <p className='name1'>Name</p>
                      <p className= 'cost'> Price</p>
                      </div>
                  </div>
                  </a>
             </div>
                )
        }
}

export default SearchResults;