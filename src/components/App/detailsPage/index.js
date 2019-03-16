import React, {Component} from 'react';
import Details from "../details";
import CondNavBar from "../condNavbar";
import './pageD.css';
import { Card, Button,ListGroup,ListGroupItem } from 'reactstrap';
import { STATUS_CODES } from 'http';
//import PaymentBox from './paymentBox';
import LoginModal from "../loginModal";
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
           rules:[]
           
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
                                 amenities: contents.amenities
                              })
                              
         })
         .catch(()=> console.log("can't access" + url + "response. "))
         }


         

    render() {
        
        console.log(this.state.data);
        console.log(this.state.amenities);
        console.log("amenities keys"+this.state.amenities);
        if(this.state.amenities.wifi == true){
            console.log("wifi");
           
             this.state.output.push("Wifi,  ");
             
           
            console.log(this.state.output+"outputtt");
        }

        if(this.state.amenities.airConditioner == true){
            console.log("wifi");
           
             this.state.output.push("Air Conditioner,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.breakfast == true){
            console.log("wifi");
           
             this.state.output.push("Breakfast,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.fireExtinguisher == true){
            console.log("wifi");
           
             this.state.output.push("Fire Extinguisher,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.firstAidKit == true){
            console.log("wifi");
           
             this.state.output.push("First Aid Kit,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.gym == true){
            console.log("wifi");
           
             this.state.output.push("Gym,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.parking == true){
            console.log("wifi");
           
             this.state.output.push("Parking,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.parking == true){
            console.log("wifi");
           
             this.state.output.push("Parking,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.pool == true){
            console.log("wifi");
           
             this.state.output.push("Pool,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.tv == true){
            console.log("wifi");
           
             this.state.output.push("TV,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.workspace == true){
            console.log("wifi");
           
             this.state.output.push("workspace,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.smokeDetector == true){
            console.log("wifi");
           
             this.state.output.push("Smoke Detector,  ");
             
           
            console.log(this.state.output+"outputtt");
        }
        if(this.state.amenities.noPets == true){
            console.log("wifi");
           
             this.state.rules.push(" No Pets,  ");
             
           
            console.log(this.state.rules+"rules");
        }
        if(this.state.amenities.noDrinking == true){
            console.log("wifi");
           
             this.state.rules.push(" No Drinking,  ");
             
           
            console.log(this.state.rules+"rules");
        }
        if(this.state.amenities.noSmoking == true){
            console.log("wifi");
           
             this.state.rules.push(" No Smoking,  ");
             
           
            console.log(this.state.rules+"rules");
        }

        
        

        
        
        return(
            <div className="details">
             
               
            <CondNavBar/>
            <center><Details/></center>
            <div>
            
                <ListGroup className="features" style={{height:'100%'}}>
        <ListGroupItem><b>Amenities</b><br/><br/>    
        <i>{this.state.output}</i>  
        </ListGroupItem>
       
                
        <ListGroupItem><b>House Rules</b><br/><br/>
        <i>{this.state.rules}</i> 
        </ListGroupItem>
      </ListGroup>
                <Card className="cardD">
               <b>House Name</b> 
                <i><center>{this.state.data.homeName}</center></i>
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
                {/* {home.amenities} */}
                <Button color="danger" onClick={this.submitCheckout}>Book</Button>
                <br/>
                </Card>
                </div>
    
                
                
            </div>
        )
    }
}

export default DetailsPage;