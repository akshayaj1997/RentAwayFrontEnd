import React, {Component} from 'react';
import Details from "../details";
import NavBar from "../navBar";
import './pageD.css';
class DetailsPage extends Component {
    render() {
        return(
            <div>
            <NavBar/>
            <Details/>
            </div>
        )
    }
}

export default DetailsPage;