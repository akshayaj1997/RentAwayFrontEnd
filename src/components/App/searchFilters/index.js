import React, {Component} from 'react';
//import Slider from 'reactrangeslider';
import Calender from '../Calender';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import './filters.css'
//import './filters.css.sidenav'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class SearchFilters extends Component {
    
      render() {
        const options = [
            { label: 'Kitchen', value: "Kitchen"},
            { label: 'TV', value: "TV"},
            { label: 'Heater', value: "Heater"},
            { label: 'Gym', value: "Gym"},
            { label: 'Air Conditioning', value: "AC"},
            { label: 'Hot Tub', value: "HT"},
            { label: 'Bath Tub', value: "BT"},
            { label: 'WiFi', value: "Wifi"},
          ];    
          const optionsHR = [
            { label: 'No Pets', value: "NP"},
            { label: 'No Smoking', value: "NS"},
            { label: 'No Drinking', value: "ND"},
            { label: 'Vegetarian', value: "Veg"},
            { label: 'Late Night', value: "LN"},
          ];    
          return(
              <div className="Container"> 
              <h6>Amenities</h6>
          <ReactMultiSelectCheckboxes options={options} />
          <h6>House Rules</h6>
          <ReactMultiSelectCheckboxes options={optionsHR} />
          </div>
            )
      }
    
    
}

export default SearchFilters;