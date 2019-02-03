import React from "react";
import "./index.css"
import SearchBar from "../searchBar";
import Calender from "../Calender";
class HomeSearch extends React.Component{

    render(){
        return(
           <form>
               <div class="aa">
               <center><h2> Book unique homes and  experiences. </h2></center>
               <div className="nextt"><center><h4> Your Place, Our safety. </h4></center></div>
               <br></br>
                    <h5>WHERE</h5>
                    <SearchBar/>
                    {/* <input type="text" name="location" placeholder="Location" required=""/><br/><br/> */}
                    <h5>CHECK-IN AND CHECK-OUT</h5>
                    <br></br>
                    <Calender/>
                    <br></br>
                    <h5>NUMBER OF GUESTS</h5>
                    <input type="text" name="guests" placeholder="Guests" required=""/><br/><br/>
                    <div id="logincontent" >
                        <input className="target" id = "target" type="submit" name = "search" value = "search"/>
                    </div>
                   
                </div>
                
           </form>
        )}
}
export default HomeSearch;