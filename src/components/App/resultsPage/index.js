import React, {Component} from 'react';
import CondNavBar from "../condNavbar";
import SearchResults from "../searchResults";
import SearchFilters from "../filters";
import './page.css';
import {createBrowserHistory as createHistory} from 'history';

class ResultsPage extends Component {
    //history=createHistory(this.props)
    constructor(props){
        super(props);
        this.state = {
            type1: [],
            Amen1: [],
            HR1:  [],
            Lang1: []
        }
    }
    componentDidMount(){
        this.setState(this.props.history.location.state)
    
    }

    render() {
        return(
            <div className="Container">
                <div className="way">
                <CondNavBar/>
                {this.state.Amen1}
                <SearchFilters/>
                <SearchResults/>
                </div>
            </div>
        )
    }
}

export default ResultsPage;