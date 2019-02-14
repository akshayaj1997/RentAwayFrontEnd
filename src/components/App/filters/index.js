import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
//import Slider from 'reactrangeslider';
//import Calender from '../Calender';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './filters.css'


class SearchFilters extends Component {
    constructor(props) {
        super(props);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        //this.toggle = this.toggle.bind(this);
        //this.state = { collapse: false };
    }

    // toggle() {
    //     this.setState({ collapse: !this.state.collapse });
    // }

    render() {
        return (
            <div>
                <div id="main">
                    <span className="spp" id="spp" onClick={this.openNav}>&#10095;</span>
                </div>
                <div id="mySidenav" className="sidenav">
                    <a href="#" className="closebtn" onClick={this.closeNav}>&#10094;</a>
                    <center><h5><i>Filters</i></h5></center>
                    <hr></hr>
                    <form >
                    <div className="filters">
                        <center> Price
                        <Range />
                        </center>
                        <hr />
                        <Button color="black" id="type" style={{ marginBottom: '1rem' }}>Home Type</Button>
                        <UncontrolledCollapse toggler="#type" style={{ marginLeft: '10%' }}>
                            <div className="leftCheck" style={{ float: "left" }}>
                                <input id="condo" type="checkbox" name="type[]" value="Condo" />
                                <label for="condo">Condo</label>
                                <br />
                                <input id="apartment" type="checkbox" name="type[]" value="Apartment" />
                                <label for="apartment">Apartment</label>
                            </div>
                            <div className="rightCheck" style={{ float: "right" }}>
                                <input id="house" type="checkbox" name="type[]" value="House" />
                                <label for="house">House</label>
                                <br />
                                <input id="BnB" type="checkbox" name="type[]" value="BnB" />
                                <label for="BnB">Bed and Breakfast</label>
                            </div>
                        </UncontrolledCollapse>
                        <Button color="black" id="amenities" style={{ marginBottom: '1rem' }}>Amenities</Button>
                        <UncontrolledCollapse toggler="#amenities" style={{ marginLeft: '10%' }}>
                            <div className="leftCheck" style={{ float: "left" }}>
                                <input id="pool" type="checkbox" name="Amen[]" value="Pool" />
                                <label for="pool">Pool</label>
                                <br />
                                <input id="HT" type="checkbox" name="Amen[]" value="Hot Tub" />
                                <label for="HT">Hot Tub</label>
                            </div>
                            <div className="rightCheck" style={{ float: "right" }}>
                                <input id="heat" type="checkbox" name="Amen[]" value="Heater" />
                                <label for="heat">Heater</label>
                                <br />
                                <input id="WH" type="checkbox" name="Amen[]" value="Water Heater" />
                                <label for="WH">Water Heater</label>
                            </div>
                        </UncontrolledCollapse>
                        <Button color="black" id="HR" style={{ marginBottom: '1rem' }}>House Rules</Button>
                        <UncontrolledCollapse toggler="#HR" style={{ marginLeft: '10%' }}>
                            <div className="leftCheck" style={{ float: "left" }}>
                                <input id="event" type="checkbox" name="HR[]" value="Event" />
                                <label for="event">Suitable for events</label>
                                <br />
                                <input id="smoke" type="checkbox" name="HR[]" value="Smoke" />
                                <label for="smoke">Smoking Allowed</label>
                            </div>
                            <div className="rightCheck" style={{ float: "right" }}>
                                <input id="pet" type="checkbox" name="HR[]" value="Pets" />
                                <label for="pet">Pets Allowed</label>
                            </div>
                        </UncontrolledCollapse>
                        <Button color="black" id="Lang" style={{ marginBottom: '1rem' }}>Languages Known by Host</Button>
                        <UncontrolledCollapse toggler="#Lang">
                            <div className="leftCheck" style={{ float: "left" }}>
                                <input id="Eng" type="checkbox" name="Lang[]" value="English" />
                                <label for="Eng">English</label>
                                <br />
                                <input id="Tel" type="checkbox" name="Lang[]" value="Telugu" />
                                <label for="Tel">Telugu</label>
                                <br />
                                <input id="Hin" type="checkbox" name="Lang[]" value="Hindi" />
                                <label for="Hin">Hindi</label>
                            </div>
                            <div className="rightCheck" style={{ float: "right" }}>
                                <input id="Tam" type="checkbox" name="Lang[]" value="Tamil" />
                                <label for="Tam">Tamil</label>
                                <br />
                                <input id="Fren" type="checkbox" name="Lang[]" value="French" />
                                <label for="Fren">French</label>
                                <br/>
                                <input id="Spa" type="checkbox" name="Lang[]" value="Spanish" />
                                <label for="Tam">Spanish</label>
                                <br />
                            </div>
                        </UncontrolledCollapse>
                       
                    </div>
                    <br/>
                    <Button color="danger" style={{float:"right", width:"50px",marginRight:"10%"}}>submit</Button>{' '}
                    </form> 
                </div>


            </div>
        )
    }
    openNav(event) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("spp").style.color = "rgba(255, 255, 255, 0)";
        // document.getElementById("main").style.display = "none";
    }

    closeNav(event) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("spp").style.color = "rgba(255, 255, 255, 1)";
    }

}

export default SearchFilters;