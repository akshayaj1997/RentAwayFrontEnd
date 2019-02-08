import React, {Component} from 'react';
//import Slider from 'reactrangeslider';
import Calender from '../Calender';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import './test.css'


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
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div id="main">
  <span className="spp" onClick={this.openNav}>&#9776; open</span>
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