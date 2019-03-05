import React, {Component} from 'react';
import Details from "../details";
import NavBar from "../navBar";
import './pageD.css';
import { Card, Button,ListGroup,ListGroupItem } from 'reactstrap';
class DetailsPage extends Component {

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
           amenities:[]
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
        return(
            <div>
            <NavBar/>
            <center><Details/></center>
            {this.state.data.map((home) => {
                if(home.id==this.props.match.params.id)
                {
                    return(
                <div>
                <ListGroup className="features" style={{height:'100%'}}>
        <ListGroupItem>Amenities<br/><br/></ListGroupItem>
        <ListGroupItem>House Rules<br/><br/></ListGroupItem>
      </ListGroup>
                <Card className="card">
               <b>Hosted By,</b> 
                <i><center>{home.name}</center></i>
                <hr/>
                <b>On the Dates,</b>
               <center> <i>{home.fromDate} through {home.toDate}</i> </center>
                <hr/>
                <b>At,</b>
                <center><i>{home.location}</i></center>
                <hr/>
                <b>Price,</b>
                <i><center>  &#8377;{home.price} </center></i>
                <hr/>
                {/* {home.amenities} */}
                <Button color="danger">Book</Button>
                <br/>
                </Card>
                </div>
                )
                }
                else {
                    return(<div/>)
                }
            })}
            </div>
        )
    }
}

export default DetailsPage;