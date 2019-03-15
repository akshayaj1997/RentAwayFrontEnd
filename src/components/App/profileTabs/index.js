import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class ProfileTabs extends React.Component {
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
    console.log("entered");
   
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

    
    
 
    const url = "http://10.10.200.32:9000/users/update";
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
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Edit Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
               
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <form  onSubmit={this.editProfile}>
      <div className="container">
        <label htmlFor="uname">
          <b>User Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={this.onUsernameChange}
          required
        />

      <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="uname"
          onChange={this.onNameChange}
          required
        />

        <label htmlFor="gender">
        <b>Gender</b>
        </label>
        <br></br>
        <label>
         <input type="radio"
        name="gender"
        value="MALE" 
        onChange={this.onGenderChange}
        />
        Male<br></br>
        <input type="radio"
        name="gender"
        value="FEMALE"
        onChange={this.onGenderChange}/>
        Female
        </label>
        <br></br>
        <label htmlFor="dob">
        <b>Birthday</b>
        </label>
        <br></br>
        <input 
        type="date"
        name="dob"
        onChange={this.onDOBChange}
        required/>
        <br></br>

        <label htmlFor="mbr">
                    <b>Mobile Number</b>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    name="mbr"
                    onChange={this.onMobileChange}
                    required
        />

        <label htmlFor="addr">
                    <b>Address</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="addr"
                    onChange={this.onAddressChange}
                    required
        />

        <label htmlFor="AdhrNbr">
                  <b>Aadhar Number/Passport Number</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    name="AdhrNbr"
                    onChange={this.onAadharChange}
                    required/>

        
        <button type="submit">Submit</button>
</div>
</form>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}