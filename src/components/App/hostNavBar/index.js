import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import "./index.css";
  import EditProfile from "../editProfile";

class HostNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.SignOut=this.SignOut.bind(this);
    this.onClickE=this.onClickE.bind(this);

    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  SignOut(){
    localStorage.clear();
    window.location.assign("http://10.10.200.32:3000/homePreSignin");
  }

  render() {
    return (
      <div>
        <Navbar  className="navBar" light expand="md" >
          <NavbarBrand className="navBar" href="/">
          <img src={require('./Capture.png')} width='120' height='40' /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white"> 
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="http://10.10.200.32:3000/homePreSignin">Homes</NavLink> 
                  </DropdownItem>
                  <DropdownItem>
                    Office Spaces
                  </DropdownItem>
                  <DropdownItem>
                    Appliances
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink className="text-white" onClick={this.onClickN} href="http://10.10.200.32:3000/hostPage">Add Listing 
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  <i class="fa fa-user-o"></i>
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem disabled>
                  Hey, {localStorage.getItem('username')}
                  </DropdownItem>
                  
                  <NavItem >
                <NavLink onClick={this.onClickE} href="#" >
                <a href='http://10.10.200.32:3000/profile'><p className='ep'><i class="fa fa-user-plus"/>Edit Profile</p></a>
                </NavLink>
              </NavItem>
              
                  <DropdownItem>
                  <a href='http://10.10.200.32:3000/profile'><p className='ep'><i class="fa fa-user-plus"/>View Profile</p></a>
                  </DropdownItem>
                  <DropdownItem>
                    <i class="fa fa-close"></i>Remove Listings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <div onClick={this.SignOut}>
                    <i class="fa fa-sign-out"></i> Sign Out
                  </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  onClickE(event) {
    var modal = document.getElementById('id03');
    modal.style.display = "block";
    
  }
}
export default HostNavBar;