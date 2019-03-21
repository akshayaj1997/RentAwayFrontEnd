import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Listings from '../listings';
import './admin.css'
import CondNavBar from '../condNavbar';

export default class AdminTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      username : ' ',
      name:' ',
      gender:' ',
      dob:' ',
      mobile:' ',
      address:' ',
      aadhar:' ',
      data:[]
    };
    this.onUsernameChange=this.onUsernameChange.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
        this.onGenderChange=this.onGenderChange.bind(this);
        this.onDOBChange=this.onDOBChange.bind(this);
        this.onMobileChange=this.onMobileChange.bind(this);
        this.onAddressChange=this.onAddressChange.bind(this);
        this.onAadharChange=this.onAadharChange.bind(this);
        this.editProfile=this.editProfile.bind(this);
        this.getProfile=this.getProfile.bind(this);
  }

  getProfile() {
     
    const url = "http://10.10.200.24:9000/users/me";
    var bearerToken = localStorage.getItem('accessToken');
      var accesstoken = 'Bearer ' + bearerToken;
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('Authorization',accesstoken)
    headers.append('GET','POST');
 
    fetch(url, {
       headers:headers,
       method: 'GET',
       
    })
    .then(response => {
      console.log(response.status);
      response.json()
              .then((responseData)=>{
                console.log("Aadhar "+responseData.aadharcard)
                this.setState({
                  username: responseData.username,
                  name: responseData.name,
                  dob: responseData.dob,
                  aadhar: responseData.aadharcard,
                  gender:responseData.gender,
                  mobile: responseData.mobilenbr,
                  address: responseData.address
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

  onUsernameChange(event){
    this.setState({username:event.target.value})
  }
  onNameChange(event){
    this.setState({name:event.target.value})

  }
  onGenderChange(event){
    this.setState({gender:event.target.value})
  }

  onDOBChange(event){
    this.setState({dob:event.target.value})
  }

  onMobileChange(event){
    this.setState({mobile:event.target.value})
  }

  onAddressChange(event){
    this.setState({address:event.target.value})
  }

  onAadharChange(event){
    this.setState({aadhar:event.target.value})
  }
  
  editProfile(event){
   
   let body = {
  
        username : this.state.username,
        gender:this.state.gender,
        dob:this.state.dob,
        mobilenbr:this.state.mobile,
        aadharcard:this.state.aadhar,
        address:this.state.address,
        name:this.state.name
     
    }
    console.log("edit profile"+body);

    
    
 
    const url = "http://10.10.200.24:9000/users/update";
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    //headers.append('GET','POST','PUT');
 
    fetch(url, {
       headers:headers,
       method: 'PUT',
       body: JSON.stringify(body)
    })
    .then(response => {
      console.log(response.status);
      if(response.status===200)
          {
            window.location.reload();
          }
          else if(response.status===400){
            alert("Username already exists");
            window.location.reload();
          }
          else if(response.status===401){
            alert("Username or password is incorrect");
            window.location.reload();
          }
          else{
            alert("Unauthorized");
            window.location.reload();
          }})
    .then(contents => {console.log("in fetch"+contents);
                
                      
 })
 .catch(()=> console.log("can't access" + url))
 
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
              onClick={() => { this.toggle('2'); this.getProfile();}}
            >
              <h2><b><i>View Reports</i></b></h2>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <Listings/>
          </TabPane>
          <TabPane tabId="2">
          <br/>
          </TabPane>
        </TabContent>
        <Button style={{width:'150px',height:'50px',backgroundColor:'rgb(255,255,255,0)',color:'black',float:'right',border:'rgb(255,255,255,0)',paddingTop:'20px'}} href='http://localhost:3000/homePreSignin'><i className='fa fa-home'/> Return to Home Page</Button>
      </div>
      </div>
    );
  }
}