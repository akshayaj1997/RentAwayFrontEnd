import React from "react";
import "./index.css"

class HomeSearch extends React.Component{

    render(){
        return(
           <form>
               <center><h4>Rent your dream home</h4></center>
               <div class="aa">
                    
        
    
                    <p>Where?</p>
                    <input type="text" name="location" placeholder="Location" required=""/><br/><br/>
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