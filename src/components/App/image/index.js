import React from "react"
import "./img.css"
import TopBar from "../topBar";
import SideNavBar from "../sideNavBar";
import AccidentList from "../accidentList";
import AccidentPast from "../accidentPast";
// import DayPicker from "react-day-picker";
// import 'react-day-picker/lib/style.css';
// //import HomeSearch from "../homeSearch"


class  Image extends React.Component{
   

    
    render(){
        if(sessionStorage.getItem('state')==='1'){
        return(<div className="myImg">
            <TopBar/>
            <SideNavBar/>
            <div style={{float:'right',marginRight:'20%',paddingTop:'2%',backgroundColor:'white',width:'50%',height:'80%',marginTop:'10%'}}>
            <AccidentPast/>
            </div>
           
          
        </div>
        );
    }

else {
    return(<div className="myImg">
    <TopBar/>
    <SideNavBar/>
    <div style={{float:'right',marginRight:'20%',paddingTop:'2%',backgroundColor:'white',width:'50%',height:'80%',marginTop:'10%'}}>
    <AccidentList/>
    </div>
   
  
</div>
);

}

    }
    }

export default Image;