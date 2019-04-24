import React from "react"
import "./img.css"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import TopBar from "../topBar";
import SideNavBar from "../sideNavBar";
import SignUpPage from "../signupPage";
import SignUpHos from "../signUpHos";
// import DayPicker from "react-day-picker";
// import 'react-day-picker/lib/style.css';
// //import HomeSearch from "../homeSearch"


class  LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.handleUname=this.handleUname.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.login=this.login.bind(this)
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          username: ' ',
          passwordHash:' '
        };
        
      }

    handleUname(e) {
        this.setState({
          username: e.target.value
        })
      }

      handlePassword(e) {
        this.setState({
          passwordHash: e.target.value
        })
      }

      login(e) {
        console.log('Entered Login')
         e.preventDefault();
        let url='http://localhost:9000/users/signin'
        let obj={}
        obj.username= this.state.username
        obj.passwordHash = this.state.passwordHash
        console.log(obj)
        fetch(url,{
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Access-Control-Allow-origin':url,
            'Access-Control-Allow-Credentials':'true'
  
          },
          method:'PUT',
          body: JSON.stringify(obj)
  
        }
        ).then(response => {
          console.log(response.status);
          if(response.status===200)
              {
                console.log('YEY')
              }
              else if(response.status===400){
                alert("Username or password does not exist");
                window.location.reload();
              }
              else if(response.status===401){
                alert("Username or password is incorrect");
                window.location.reload();
              }
              else{
                alert("Unauthorized");
                window.location.reload();
              }
         response.json()
                .then((responseData)=>{localStorage.setItem('accessToken',responseData.accessToken)
                                       localStorage.setItem('role',responseData.role)
                                       localStorage.setItem('username',responseData.username)
                                       localStorage.setItem('id',responseData.userId)
                                        this.setState(
                                          {accessToken:responseData.accessToken,
                                            role:responseData.role,
                                            username:responseData.username
                                          }
                                        )
                                        if(localStorage.getItem('role')==='HOST'){
                                          console.log("Hello")
                                          window.location.assign("http://localhost:3000/homePreSignin")
                                        }
                                        if(localStorage.getItem('role')==='USER'){
                                          console.log("Hello")
                                          window.location.assign("http://localhost:3000/updateUser")
                                        }
                                        
                                        console.log("bearerToken:"+this.state.accessToken)
              })
          })
          .then(contents => {console.log("in fetch "+contents);
                            this.setState({
                               data:contents
                            })
       })
          .catch(function (error) {
          console.log(error);
          });
       
       
      }

      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          })
          
        }
    }
    
    render(){
        
        return(<div className="myImg">
            <TopBar/>
            <div className='prof1Tabs' style={{paddingLeft:'30px', height:'80%'}}>
        <Nav tabs>
          <NavItem>
            <NavLink
             
              onClick={() => { this.toggle('1'); }}
            >
              <h2><b><i>Sign In</i></b></h2>
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink
              
              onClick={() => { this.toggle('2'); }}
            >
              <h2><b><i> Sign Up as User</i></b></h2>
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink
              onClick={() => { this.toggle('3'); }}
            >
              <h2><b><i>Sign Up as Hospital</i></b></h2>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <br/>
          <form onSubmit={this.login}>
          <div className="container">
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChangeCapture={this.handleUname}
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChangeCapture={this.handlePassword}
          required
        />
        <button type="submit">Login</button>
        <br></br>
        <label>
          <input
            type="checkbox"
            defaultChecked="checked"
            name="remember"
          />{" "}
          Remember me
        </label>
      </div>
     
    </form>

          </TabPane>
          <TabPane tabId="2">
          <br/>
          <SignUpPage/>
          </TabPane>
          <TabPane tabId="3">
          <br/>
          <SignUpHos/>
          </TabPane>
        </TabContent>
        
      </div>
      </div>
            
          
        )
    }

    }

export default LoginPage;