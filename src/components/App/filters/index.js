import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
//import Slider from 'reactrangeslider';
//import Calender from '../Calender';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './filters.css';
import {createBrowserHistory as createHistory} from 'history';
import { withRouter } from 'react-router-dom';

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
            Lang1: [],
            price: ''
        }
        this.onFiltersChange=this.onFiltersChange.bind(this);
        this.onCheckBoxT=this.onCheckBoxT.bind(this);
        this.onCheckBoxAm=this.onCheckBoxAm.bind(this);
        this.onCheckBoxH=this.onCheckBoxH.bind(this);
        this.rangeSet=this.rangeSet.bind(this);
        this.priceChange=this.priceChange.bind(this);
        
    }

    priceChange(e){
        this.setState({
            price: e.target.value
        })
    }
    
    onFiltersChange(e) {
        
        let path= '/resultsPage'
        this.setState({
            type1: this.state.type1,
            Amen1: this.state.Amen1,
            HR1: this.state.HR1,
            range1: this.state.range1,
            price: this.state.price
        }
        )
        sessionStorage.setItem('propertyType',this.state.type1)
        sessionStorage.setItem('amenities',this.state.Amen1)
        sessionStorage.setItem('rules',this.state.HR1)
        sessionStorage.setItem('price',this.state.price)
        this.props.history.push(path,this.state)
        console.log(this.props.history.location.state.Amen1);
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("spp").style.color = "rgba(255, 255, 255, 1)";
        e.preventDefault();
        this.props.history.go(0)
    }
    
      
    onCheckBoxT(e) {

        this.state.type1.push(e.target.value);
        console.log(this.state.type1);
        //console.log(this.props.history)
        
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

    rangeSet(e) {
        this.setState({
            range1: e.target.value
        })
        console.log(this.state.range1)
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
                    
                    <center> 
                        <Button color="black" id="Price" style={{ marginBottom: '1rem' }}>Price</Button>
                        <UncontrolledCollapse toggler="#Price" style={{ marginLeft: '0%' }}>
                        {/* <Range onAfterChange={this.rangeSet}/>  */}
                        <input type="number" name="Price" min="1000" max="50000" onChange={this.priceChange}/> 
                        {/* <input type="number" name="Price" min="1000" max="100000"/> */}
                        </UncontrolledCollapse>
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
                                <input id="Bung" type="checkbox" name="type[]" value="Bungalow" onClick={this.onCheckBoxT} />
                                <label for="Bung">Bungalow</label>
                                <br />
                                <input id="Service" type="checkbox" name="type[]" value="Service" onClick={this.onCheckBoxT} />
                                <label for="Service">Serviced Apartment</label>
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
                        <div className="Add">
                        <Button color="black" id="Additional" style={{ marginBottom: '1rem' }}>Edit Previous Filters</Button>
                        <UncontrolledCollapse toggler="#Additional" style={{ marginLeft: '0%' }}>
                        {/* <Range onAfterChange={this.rangeSet}/>  */}
                        <input type="text" name="Location" placeholder="Where?" style={{width:"200px",height:"30px"}}/>
                        <input type="number" name="guestCount" placeholder="Guest Count"/>
                        </UncontrolledCollapse>
                        </div>
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

export default withRouter(SearchFilters);