import React, {Component} from 'react';
import CondNavBar from "../condNavbar";
import SearchResults from "../searchResults";
import SearchFilters from "../filters";
import './page.css';
import {createBrowserHistory as createHistory} from 'history';
import ResultMaps from '../resultsMap';

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
        console.log(this.props.history.location.state)
    
    }

    render() {
        return(
           
            <div className="results">
                <div className="way">
                <CondNavBar/>
                <SearchFilters/>
                <div style={{width:'50%'}}><SearchResults/></div>
                <ResultMaps/>
                </div>
            </div>
        )
    }
}

export default ResultsPage;