import React from "react";
import "./index.css"
import SearchBar from "../searchBar";
import Calender from "../Calender";
import ReactSearchBox from 'react-search-box'
class HomeSearch extends React.Component {
    data = [
        {
          key: 'hyderabad',
          value: 'Hyderabad, India',
        },
        {
          key: 'paris',
          value: 'Paris, France',
        },
        {
          key: 'maryland',
          value: 'Mary Land, USA',
        },
        {
          key: 'melbourne',
          value: 'Melbourne, Australia',
        },
      ]
    constructor(props) {
        super(props)
        this.state = {
            location:' ',
            guests: ' '
        }
        this.onSearch = this.onSearch.bind(this)
        this.onGuest = this.onGuest.bind(this)
    }

    onSearch(e){
        console.log(e.target.value);
    }

    onGuest(e){
        console.log(e.target.value);
    }
    render() {
        return (
            <form>
                <div class="aa">
                    <center><h2> Book unique homes and  experiences. </h2></center>
                    <div className="nextt"><center><h4> Your Place, Our safety. </h4></center></div>
                    <br></br>
                    <h5>WHERE</h5>
                    <ReactSearchBox
                        placeholder="Search"
                        data={this.data}
                        value={this.data[0]}
                        onSelect={this.onSearch}
                        onChange={this.onSearch}
                    />
                    {/* <input type="text" name="location" placeholder="Location" required=""/><br/><br/> */}
                    <h5>CHECK-IN AND CHECK-OUT</h5>
                    <br></br>
                    <Calender/>
                    <br></br>
                    <h5>NUMBER OF GUESTS</h5>
                    <input type="number" name="guests" placeholder="Guests" min="1" required="" onChange={this. onGuest} /><br /><br />
                    <div id="logincontent" >
                        <input className="target" id="target" type="submit" name="search" value="search" />
                    </div>

                </div>

            </form>
        )
    }
}
export default HomeSearch;