import React, {Component} from 'react';
//import Slider from 'reactrangeslider';
import Calender from '../Calender';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import './filters.css'


class SearchFilters extends Component {
    constructor() {
        super();
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }
    
    
    render() {
        return(
            <div>
                <div id="mySidenav" className="sidenav">
  <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
  <center><h5><i>Filters</i></h5></center>
  <hr></hr>
  

  
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
      document.getElementById("main").style.marginLeft= "0";
    }
    
}

export default SearchFilters;