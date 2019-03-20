import React, {Component} from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import CondNavBar from "../condNavbar";
import './pageD.css';
import { Card, Button,ListGroup,ListGroupItem } from 'reactstrap';
import { STATUS_CODES } from 'http';
//import PaymentBox from './paymentBox';
import LoginModal from "../loginModal";
import { timingSafeEqual } from 'crypto';
var print = []

class DetailsPage extends Component {

    constructor(props){
        super(props);
        this.submitCheckout=this.submitCheckout.bind(this);
        this.state = {
           data: [],
           homeId : ' ',
           fromDate:' ',
           location : ' ',
           homeName:' ',
           price:' ',
           toDate:' ',
           amenities:[],
           output:[],
           output1:[],
           rules:[],
           rules1:[],
           imageUrls:[],
           propertyType:''
           }
           
        }

        submitCheckout(){
            if(localStorage.getItem('role')===null)
            {
              
              var modal = document.getElementById('id01');
              modal.style.display = "block";
             return(
                 <LoginModal/>
             )

            } 
           
            else{
                window.location.assign('http://localhost:3000/checkOut')
            }   
        }
        componentDidMount(){
            const url = "http://10.10.200.24:9000/homes/"+this.props.match.params.id;
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
                                 data:contents,
                                 amenities: contents.amenities,
                                 imageUrls:contents.imageUrls
                              })
                              
         })
         .catch(()=> console.log("can't access" + url + "response. "))
         }


         

    render() {
        
        console.log(this.state.data);
        console.log(this.state.amenities);
        console.log("Images"+this.state.imageUrls)
        console.log("amenities keys"+this.state.amenities);
        if(this.state.amenities.wifi == true){
            
            this.state.output1.push(<i class="fa fa-wifi" aria-hidden="true"></i>)
           
            this.state.output.push("Wifi  ");
             
           
           
        }

        if(this.state.amenities.airConditioner == true){
            
            this.state.output1.push(<i class="fa fa-snowflake-o fa-2x" aria-hidden="true"></i>)
            
            this.state.output.push("Air Conditioner  ");
             
           
           
        }
        if(this.state.amenities.breakfast == true){
           this.state.output1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
            
            this.state.output.push("Breakfast  ");
      
        }
        if(this.state.amenities.fireExtinguisher == true){
           this.state.output1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
            
            this.state.output.push("Fire Extinguisher ");
        }
        if(this.state.amenities.firstAidKit == true){
           this.state.output1.push(<i class="fa fa-medkit fa-2x" aria-hidden="true"></i>)
            
            this.state.output.push("First Aid Kit  ");
        }
        if(this.state.amenities.gym == true){
           this.state.output1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
            
            this.state.output.push("Gym  ");
        }
        if(this.state.amenities.parking == true){
           this.state.output1.push(<i class="fa fa-car fa-2x" aria-hidden="true"></i>)
            
            this.state.output.push("Parking  ");
        }
        if(this.state.amenities.pool == true){
           this.state.output1.push(<i class="fa fa-bath fa-2x"></i>)
           
            this.state.output.push("Pool  ");
        }
        if(this.state.amenities.tv == true){
           this.state.output1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
            
            this.state.output.push("TV  ");
        }
        if(this.state.amenities.workspace == true){
           this.state.output1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
            
            this.state.output.push("Work Space  ");
            
        }
        if(this.state.amenities.smokeDetector == true){
            this.state.output1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
             
             this.state.output.push("Smoke Detector  ");
            
        }
        if(this.state.amenities.noPets == true){
            
            this.state.rules1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
            
            this.state.rules.push(" No Pets  ");
             
           
            
        }
        if(this.state.amenities.noDrinking == true){
            this.state.rules1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
             this.state.rules.push(" No Drinking  ");
             
           
           
        }
        if(this.state.amenities.noSmoking == true){
            
            this.state.rules1.push(<i class="fa fa-bath fa-2x" aria-hidden="true"></i>)
            
            this.state.rules.push(" No Smoking  ");
             
           
            
        }

        
        

        
        
        return(
            <div className="details">
            <CondNavBar/>
              <div className="HomenameBox">
              <div style={{fontSize:'16px'}}>{this.state.data.propertyType} in {this.state.data.location} </div>
              <br/>
                <i style={{fontSize:'40px'}}>{this.state.data.homeName}
                </i></div>
             <div className="images"><img src={this.state.imageUrls[1]} style={{width:'140vh', float:'right', marginRight:'10px',height:'70vh'}}/></div> 
            <div>
           
        <div className="cardD" > 
        <Card className='amen'>
        <b>Amenities</b> 
        <br/>
        <center>
       
        {this.state.output.map((home,index) => {
               const id = `${home.id}`
               // const path= `/detailsPage/`+id
               return(
                  <li key={index} style={{listStyle:'none',float:'left',paddingLeft:'10px',paddingBottom:'10px',paddingRight:'10px',paddingTop:'20px',display:'inline'}}>
                  <div className='listitemsAmen' >
                  {this.state.output1[index]}
                  <br/> 
                  {this.state.output[index]}
                  </div>
                   </li>
               )
            })}
            </center>
            </Card>
        <Card className='HR'>
        <b>House Rules</b><br/> <br/>
        {this.state.rules.map((home,index) => {
               const id = `${home.id}`
               // const path= `/detailsPage/`+id
               return(
                  <li key={index} style={{listStyle:'none',display:'inline',paddingLeft:'5px',paddingBottom:'5px' }}>
                  <div className='listitemsAmen' >
                  {this.state.rules1[index]}<br/>
                  {this.state.rules[index]}
                  </div>
                   </li>
               )
            })}
            </Card>
            
           
              
              {/* <div style={{marginTop:'5%',paddingTop:'30%'}}>
                <hr/>
                <b>On the Dates</b>
               <center> <i>{this.state.data.fromDate} through {this.state.data.toDate}</i> </center>
                <hr/>
                <b>At</b>
                <center><i>{this.state.data.location}</i></center>
                <hr/>
                <b>Price</b>
                <i><center>  &#8377;{this.state.data.price} </center></i>
                <hr/>
                
                <Button color="danger" onClick={this.submitCheckout}>Book</Button>
                <br/>
                </div> */}
                </div>
                </div>
    
                
                
            </div>
        )
    }
}

export default DetailsPage;