import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Listings from '../listings';
import './admin.css'
import CondNavBar from '../condNavbar';
import PendingUsers from '../pendingUsers';

export default class AdminTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      data: [],
      homeId:'',
      homeName : ' ',
      propertyType:' ',
      location: ' ',
      user:[],
      userId:'',
      username:''

    };
    
        //this.getPending=this.getPending.bind(this);
  }

  onDelete(id){console.log('Delete listing')}

  

  componentDidMount() {
     
    const url = "http://localhost:9000/pendingListings";
    // var bearerToken = localStorage.getItem('accessToken');
    //   var accesstoken = 'Bearer ' + bearerToken;
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
    //headers.append('Authorization',accesstoken)
    headers.append('GET','POST');
 
    fetch(url, {
       headers:headers,
       method: 'GET',
       
    })
    .then(response => {

      response.json()
              .then((responseData)=>{
                
                this.setState({
                  data: responseData,
                  user: responseData.user
                })
              })
              
       
        if(response.status===401){
            alert("Go and Sign in");
            window.location.reload();
          }
          })
    .then(contents => {console.log("in fetch"+contents);
                
                      
 })
 .catch(()=> console.log("can't access" + url))
 this.toggle('2');

  }
  
  


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
      
    }
  }
  render() {
    return (
      <div className='adminTabs'>
      <CondNavBar/>
      <div className='prof1Tabs'>
        <Nav tabs>
            <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <h2><b><i>View Pending</i></b></h2>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <h2><b><i>View Pending Users</i></b></h2>
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <h2><b><i>View Reports</i></b></h2>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <br/>
          <ul>
          <br/>
           {this.state.data.map((home,index) => {
     return(
        <li key={index} style={{fontSize:'20px'}}>
      <i><b>{home.homeName}</b> </i>  <div style={{float:'right'}}><input type='button' style={{backgroundColor:'#FF4C4C',color:'white',fontSize:'16px',fontStyle:'oblique'}} className='listbutton' value='Delete Listing' onClick={this.onDelete.bind(this,home.homeId)}></input>  &nbsp; <input type='button' style={{backgroundColor:'#32CD32',color:'white',fontSize:'16px',fontStyle:'oblique'}} className='listbutton' value='Confirm Listing' onClick={this.onDelete.bind(this,home.homeId)}></input></div>
        <br/>
        <br/>
         </li>
     )
  })}
  </ul>
          </TabPane>
          <TabPane tabId="2">
          <br/>
          <PendingUsers/>
          </TabPane>
          <TabPane tabId="3">
          <br/> Hello
          </TabPane>
        </TabContent>
        <Button style={{width:'150px',height:'50px',backgroundColor:'rgb(255,255,255,0)',color:'black',float:'right',border:'rgb(255,255,255,0)',paddingTop:'20px'}} href='http://localhost:3000/homePreSignin'><i className='fa fa-home'/> Return to Home Page</Button>
      </div>
      </div>
    );
  }
}