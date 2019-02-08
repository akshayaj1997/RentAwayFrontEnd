import React, {Component} from 'react';
import NavBar from "../navBar";
import SearchResults from "../searchResults";
import './page.css';
class ResultsPage extends Component {
    render() {
        return(
            <div className="Container">
                <div className="way">
                <NavBar/>
                <SearchResults/>
                </div>
            </div>
        )
    }
}

export default ResultsPage;