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
                <div id="mySidenav" className="sidenav">
                    <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <center><h5><i>Filters</i></h5></center>
                    <hr></hr>
                    <div className="filters">
                        <center> Price
                        <Range />
                        </center>
                        <hr />
                        <Button color="black" id="type" style={{ marginBottom: '1rem' }}>Home Type</Button>
                        <UncontrolledCollapse toggler="#type">
                        
                        </UncontrolledCollapse>
                        <Button color="black" id="amenities" style={{ marginBottom: '1rem' }}>Amenities</Button>
                        <UncontrolledCollapse toggler="#amenities">
                        Heloo1
                        </UncontrolledCollapse>
                        <Button color="black" id="HR" style={{ marginBottom: '1rem' }}>House Rules</Button>
                        <UncontrolledCollapse toggler="#HR">
                        Heloo2
                        </UncontrolledCollapse>
                        <Button color="black" id="PT" style={{ marginBottom: '1rem' }}>Property Type</Button>
                        <UncontrolledCollapse toggler="#PT">
                        Heloo3
                        </UncontrolledCollapse>

                    </div>

                </div>

                <div id="main">
                    <span className="spp" onClick={this.openNav}>&#9776;</span>
                </div>
            </div>
        )
    }
    openNav(event) {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    closeNav(event) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

}

export default SearchFilters;