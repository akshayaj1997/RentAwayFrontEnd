import React from "react"
import "./img.css"
import NavBar from "../navBar"
import SignUpModal from "../signUpModal";
import SearchBar from "../searchBar";
import HomeSearch from "../homeSearch";
//import HomeSearch from "../homeSearch"


class  Image extends React.Component{

    
    render(){
        
        return(<div className="myImg">
           
            <NavBar/>
           <div className='hello'><HomeSearch/></div> 
        </div>
        );
    }

    }

export default Image;