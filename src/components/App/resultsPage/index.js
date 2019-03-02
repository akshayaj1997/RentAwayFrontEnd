import React, {Component} from 'react';
import NavBar from "../navBar";
import SearchResults from "../searchResults";
import SearchFilters from "../filters";
import './page.css';
import {createBrowserHistory as createHistory} from 'history';

class ResultsPage extends Component {
    history=createHistory(this.props)
    constructor(props){
        super(props);
        this.state = {
            type1: []
        }
    }
    componentDidMount(){
        this.setState({
            type1:this.props.type1
        })
    }

    render() {
        return(
            <div className="Container">
                <div className="way">
                <NavBar/>
                {this.state.type1}
                <SearchFilters/>
                <SearchResults/>
                {/* <SearchResults/> */}
                </div>
            </div>
        )
    }
}

export default ResultsPage;