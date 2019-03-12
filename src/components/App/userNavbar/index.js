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
  


class UserNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.SignOut=this.SignOut.bind(this);
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
    window.location.assign("http://localhost:3000/homePreSignin");
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
                    Homes
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
                <NavLink className="text-white" onClick={this.onClickN} href="http://localhost:3000/hostPage">Become a host</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-white">
                  <i class="fa fa-user-o"></i>
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem disabled>
                  Hey, {localStorage.getItem('username')}
                  </DropdownItem>
                  <DropdownItem>
                   <i class="fa fa-user-plus"></i> Edit Profile
                  </DropdownItem>
                  <DropdownItem>
                    <i class="fa fa-vcard-o"></i>View Profile
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
}
export default UserNavBar;