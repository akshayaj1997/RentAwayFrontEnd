import React, {Component} from 'react';
import NavBar from "../navBar";
import SearchResults from "../searchResults";
import SearchFilters from "../filters";
import './page.css';
class ResultsPage extends Component {
    render() {
        return(
            <div className="Container">
                <div className="way">
                <NavBar/>
                <SearchFilters/>
                <SearchResults/>
                <SearchResults/>
                </div>
            </div>
        )
    }
}

export default ResultsPage;