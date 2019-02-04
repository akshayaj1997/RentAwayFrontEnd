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
  import LoginModal from "../loginModal";
  import SignUpModal from "../signUpModal";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.onClickB=this.onClickB.bind(this);
    this.onClickN=this.onClickN.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar  className="navBar" light expand="md" >
          <NavbarBrand className="navBar" href="/">
          <img src={require('./Capture.png')} width='120' height='40'  /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-danger"> 
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
                <NavLink className="text-danger" onClick={this.onClickN} href="#">
                Become a host
                </NavLink>
                <SignUpModal/>
              </NavItem>
              <NavItem >
                <NavLink className="text-danger"  onClick={this.onClickB} href="#">Login
                </NavLink>
                <LoginModal/>
               
              </NavItem>
             
              <NavItem>
                <NavLink className="text-danger" onClick={this.onClickN} href="#">SignUp</NavLink>
                <SignUpModal/>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  onClickB(event) {
    var modal = document.getElementById('id01');
    modal.style.display = "block";
   
  }

  onClickN(event) {
    var modal2 = document.getElementById('id02');
    modal2.style.display = "block";
    
  }
}
export default NavBar;