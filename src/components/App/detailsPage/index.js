import React, {Component} from 'react';
import Details from "../details";
import CondNavBar from "../condNavbar";
import './pageD.css';
import { Card, Button,ListGroup,ListGroupItem } from 'reactstrap';
//import PaymentBox from './paymentBox';
class DetailsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
           data: [],
           homeId : ' ',
           fromDate:' ',
           location : ' ',
           homeName:' ',
           price:' ',
           toDate:' ',
           amenities:[]
           }
           
        }
        componentDidMount(){
            const url = "http://10.10.200.32:9000/homes/"+this.props.match.params.id;
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
        console.log(this.state.data);
        return(
            <div>
            <CondNavBar/>
            <center><Details/></center>
            <div>
                <ListGroup className="features" style={{height:'100%'}}>
        <ListGroupItem>Amenities<br/><br/>
        {this.state.data.amenityId}
        </ListGroupItem>
        <ListGroupItem>House Rules<br/><br/></ListGroupItem>
      </ListGroup>
                <Card className="cardD">
               <b>House Name</b> 
                <i><center>{this.state.data.homeName}</center></i>
                <hr/>
                <b>On the Dates,</b>
               <center> <i>{this.state.data.fromDate} through {this.state.data.toDate}</i> </center>
                <hr/>
                <b>At,</b>
                <center><i>{this.state.data.location}</i></center>
                <hr/>
                <b>Price,</b>
                <i><center>  &#8377;{this.state.data.price} </center></i>
                <hr/>
                {/* {home.amenities} */}
                <Button color="danger" href='http://localhost:3000/checkOut'>Book</Button>
                <br/>
                </Card>
                </div>
    
                
                
            </div>
        )
    }
}

export default DetailsPage;