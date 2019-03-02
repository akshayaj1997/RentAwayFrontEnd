import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
//import Slider from 'reactrangeslider';
//import Calender from '../Calender';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './filters.css';
import {createBrowserHistory as createHistory} from 'history';


class SearchFilters extends Component {
    history=createHistory(this.props)
    constructor(props) {
        super(props);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.state = {   
            type1: [],
            Amen1: [],
            HR1:  [],
            Lang1: []
        }
        this.onFiltersChange=this.onFiltersChange.bind(this);
        this.onCheckBoxT=this.onCheckBoxT.bind(this);
        this.onCheckBoxAm=this.onCheckBoxAm.bind(this);
        this.onCheckBoxH=this.onCheckBoxH.bind(this);
    }
    onFiltersChange() {
        let path= `/resultsPage`
        this.setState({
            type1: this.state.type1,
            Amen1: this.state.Amen1,
            HR1: this.state.HR1
        }
        )
        console.log(this.state);
        this.history.push(path,this.state)
    }
    onCheckBoxT(e) {
        this.state.type1.push(e.target.value);
        console.log(this.state.type1);
        
    }
    onCheckBoxAm(e) {
        this.state.Amen1.push(e.target.value)
    }
    onCheckBoxH(e) {
        this.state.HR1.push(e.target.value)
    }

    onCheckBoxL(e) {
        this.state.Lang1.push(e.target.value)
    }

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
                    <form onSubmit={this.onFiltersChange}>
                    <div className="filters">
                        <center> Price
                        <Range />
                        </center>
                        <hr />
                        <Button color="black" id="type" style={{ marginBottom: '1rem' }}>Home Type</Button>
                        <UncontrolledCollapse toggler="#type" style={{ marginLeft: '10%' }}>
                            <div className="leftCheck" style={{ float: "left" }}>
                                <input id="condo" type="checkbox" name="type[]" value="Condo" onClick={this.onCheckBoxT} />
                                <label for="condo">Condo</label>
                                <br />
                                <input id="apartment" type="checkbox" name="type[]" value="Apartment" onClick={this.onCheckBoxT} />
                                <label for="apartment">Apartment</label>
                            </div>
                            <div className="rightCheck" style={{ float: "right" }}>
                                <input id="house" type="checkbox" name="type[]" value="House" onClick={this.onCheckBoxT} />
                                <label for="house">House</label>
                                <br />
                                <input id="BnB" type="checkbox" name="type[]" value="BnB" onClick={this.onCheckBoxT} />
                                <label for="BnB">Bed and Breakfast</label>
                            </div>
                        </UncontrolledCollapse>
                        <Button color="black" id="amenities" style={{ marginBottom: '1rem' }}>Amenities</Button>
                        <UncontrolledCollapse toggler="#amenities" style={{ marginLeft: '10%' }}>
                            <div className="leftCheck" style={{ float: "left" }}>
                                <input id="pool" type="checkbox" name="Amen[]" value="Pool" onClick={this.onCheckBoxAm}/>
                                <label for="pool">Pool</label>
                                <br />
                                <input id="HT" type="checkbox" name="Amen[]" value="Hot Tub" onClick={this.onCheckBoxAm} />
                                <label for="HT">Hot Tub</label>
                            </div>
                            <div className="rightCheck" style={{ float: "right" }}>
                                <input id="heat" type="checkbox" name="Amen[]" value="Heater" onClick={this.onCheckBoxAm} />
                                <label for="heat">Heater</label>
                                <br />
                                <input id="WH" type="checkbox" name="Amen[]" value="Water Heater" onClick={this.onCheckBoxAm} />
                                <label for="WH">Water Heater</label>
                            </div>
                        </UncontrolledCollapse>
                        <Button color="black" id="HR" style={{ marginBottom: '1rem' }}>House Rules</Button>
                        <UncontrolledCollapse toggler="#HR" style={{ marginLeft: '10%' }}>
                            <div className="leftCheck" style={{ float: "left" }}>
                                <input id="event" type="checkbox" name="HR[]" value="Event" onClick={this.onCheckBoxH}/>
                                <label for="event">Suitable for events</label>
                                <br />
                                <input id="smoke" type="checkbox" name="HR[]" value="Smoke" onClick={this.onCheckBoxH}/>
                                <label for="smoke">Smoking Allowed</label>
                            </div>
                            <div className="rightCheck" style={{ float: "right" }}>
                                <input id="pet" type="checkbox" name="HR[]" value="Pets" onClick={this.onCheckBoxH} />
                                <label for="pet">Pets Allowed</label>
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