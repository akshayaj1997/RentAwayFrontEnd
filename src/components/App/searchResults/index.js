import React, {Component} from 'react';
import './results.css';
import ImageCarousel from '../imageCarousel';



class SearchResults extends Component {
    constructor(props){
        super(props);
        this.state = {
           data: [],
           id : ' ',
           fromDate:' ',
           location : ' ',
           name:' ',
           price:' ',
           toDate:' ',
           }
     
     }
     
     componentDidMount(){
        const url = "http://10.10.200.24:9000/homes";
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
                  <ul>
                     
                     {this.state.data.map((home,index) => {
               const ii = `${home.id}`
               return(
                  <li key={index}>
                  <a href={'http://localhost:3000/detailsPage/'+ii}><div class="card">
                  <div className="car">
                  <ImageCarousel/>
                  </div>
                     {/* <img src={require('./images.png')} alt="Avatar" className='image' /> */}
                     <div class="container">
                      <p className='type1'>{home.name} Flat</p>
                      <p className='location'>{home.location}</p>
                      <p className='name1'> Malaysian Township</p>
                      <p className= 'cost'> {home.Price} Rs. 5000</p>
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