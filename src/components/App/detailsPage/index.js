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
           }
        }

        componentDidMount(){
            const url = "http://localhost:9000/homes";
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
            <Details/>
            {this.state.data.map((home,index) => {
                if(home.id==this.props.match.params.id)
                {
                    return(
                <div>
                <ListGroup className="features">
        <ListGroupItem color="success">{home.headers}<br/><br/></ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in<br/><br/></ListGroupItem>
        <ListGroupItem color="success">Morbi leo risus<br/><br/></ListGroupItem>
        <ListGroupItem color="info">Porta ac consectetur ac<br/><br/></ListGroupItem>
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
                <Button color="danger">Book</Button>
                <br/>
                </Card>
                </div>
                )
                }
                else {
                    return(<div></div>)
                }
            })}
            </div>
        )
    }
}

export default DetailsPage;