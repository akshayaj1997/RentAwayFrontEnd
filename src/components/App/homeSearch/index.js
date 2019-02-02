import React from "react";
import "./index.css"
import SearchBar from "../searchBar";

class HomeSearch extends React.Component{

    render(){
        return(
           <form>
               <center><h4> Rent your dream home </h4></center>
               <div className="nextt"><center><h6> Your Place, Our safety </h6></center></div>
               <br></br>
               <div class="aa">
                    
        
    
                    <p>Where?</p>
                    <SearchBar/>
                    {/* <input type="text" name="location" placeholder="Location" required=""/><br/><br/> */}
                    <p>From Date</p>
                    <input type="date" name = "date" placeholder="(dd/mm/yy)" required=""/><br/><br/>
                    <p>To Date</p>
                    <input type="date" name = "date" placeholder="(dd/mm/yy)" required=""/><br/><br/>
                    <p>Number of Guests</p>
                    <input type="text" name="guests" placeholder="Guests" required=""/><br/><br/>
                   
                    <center>
                    <div id="logincontent" >
                        <input className="target" id = "target" type="submit" name = "search" value = "search"/>
                    </div>
                    </center>
                   
                </div>
                
           </form>
        )}
}
export default HomeSearch;