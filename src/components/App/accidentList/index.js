import React, { Component } from 'react';
import './results.css';


var body;
var items;
var sort=true;
class AccidentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
         latitude: null,
         longitude: null,


          }
      }

      componentDidMount(){
     
        if(sessionStorage.getItem("del")) {
         
         
          sessionStorage.removeItem("del")
        }
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
    
          
        render(){ 
            
          return( 
            <div className='ViewListings'>    
            <ul>
              
              <br/>
              <div style={{fontSize:'25px'}}><i class="fas fa-car-crash"></i> Active cases to be taken.</div>
               {this.state.data.map((user,index) => {
        if(user.role==='USER'&& user.status==='ACTIVE') 
        {return(
            <li key={index}>
            <table>
           <tr style={{fontSize:'20px'}}>
            <td style={{padding:'20px'}}> {user.name}</td>
             <td style={{padding:'20px'}}> {user.aadharcard}</td>
            <td style={{padding:'20px'}}> {user.mobilenbr} </td>
            <td style={{padding:'20px',textTransform:'lowercase'}}> {user.gender}
            </td>
            </tr>
       
            <br/>
            <br/>
            </table>
             </li>
         )}
      })}
      </ul>
       </div>
            
          )
        }
}

export default AccidentList;