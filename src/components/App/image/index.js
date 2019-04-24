import React from "react"
import "./img.css"
import CondNavBar from "../condNavbar";
import SignUpModal from "../signUpModal";
import SearchBar from "../searchBar";
import HomeSearch from "../homeSearch";
import TopBar from "../topBar";
import SideNavBar from "../sideNavBar";
import AccidentList from "../accidentList";
// import DayPicker from "react-day-picker";
// import 'react-day-picker/lib/style.css';
// //import HomeSearch from "../homeSearch"


class  Image extends React.Component{
   

    
    render(){
        
        return(<div className="myImg">
            <TopBar/>
            <SideNavBar/>
            <div style={{float:'right',marginRight:'20%',paddingTop:'5%',backgroundColor:'white',width:'50%',height:'50%',marginTop:'10%'}}>
            <AccidentList/>
            </div>
           
          
        </div>
        );
    }

    }

export default Image;