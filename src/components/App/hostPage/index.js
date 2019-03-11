import React from "react";
import "./host.css";
import Calender from "../Calender";

var currentTab = 0; 


class HostPage extends React.Component{
    
   
    constructor(props){
        super(props);
        
            this.myFunction1=this.myFunction1.bind(this);
            this.myFunction2=this.myFunction2.bind(this);
            this.myFunction3=this.myFunction3.bind(this);
            this.ontoDateDataChanged=this.ontoDateDataChanged.bind(this);
            this.onfromDateDataChanged=this.onfromDateDataChanged.bind(this);
           // this.onClickSubmit=this.onClickSubmit.bind(this);
       
    
            this.state = {
                
                fromDate:' ',
                toDate:' ',
                
              }
      
    }

    ontoDateDataChanged(newData){
        this.setState({toDate:newData})
       
    }

    onfromDateDataChanged(newData){
        this.setState({fromDate:newData})
       
    }

    onClickSubmit
    
    render(){
        return(
            <div>
            <center>
            <section className="bg">
            <div>
           
            </div></section>
            </center>
            <section>
           <div className = "container">
           <p className="title">Hosting in 3 steps</p> 
           <br/>
           <ul className="progressbar">
          <li><h1>List your space for free</h1>
           <p className="page">No matter what kind of home or room you have to share, Rent@way makes it simple and secure to host travelers. </p>
           </li>
           <li><h1>Decide how you want to host</h1>
           <p className="page">Choose your own schedule, prices, and requirements for guests. We’re there to help along the way.</p>
           </li>
           <li><h1>Welcome your first guest</h1>
           <p className="page">Once your listing is live, qualified guests can reach out. You can message them with any questions before their stay.</p>
           </li>

           </ul>
           </div>   
            </section>


            <section>
                <form>
          <div id="bg2">
             
                  <br></br>
             
               <div className="box">
               <center><h2><b>LIST YOUR SPACE FOR FREE</b></h2></center>
               <div className="nextt"><center></center></div>
               <br></br>
              
                    <h5><b>PROPERTY TYPE</b></h5>
                    <select required className="prop">
                    <option value="">Choose the Property type</option>
            <option value="Apartment">Apartment</option>
            
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="serviced apartments">Serviced Apartment</option>
          </select>
               
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* <input type="text" name="location" placeholder="Location" required=""/><br/><br/> */}
                    
                    <h5><b>GUEST COUNT</b></h5>
                    <input  className = "prop" type="number" min="1" name="guests" placeholder="Guests" required=""/><br></br><br></br>
                    <h5><b>WHERE</b></h5>
                    <input  className = "ts" type="text" name="location" placeholder="Location" required=""/><br></br><br></br>
                    <h5><b>BASIC AMENITIES</b></h5>
                   
                               

                    <div className="cs1" style={{ float: "right" }}>      
                                <input id="pool" type="checkbox" name="amenity" value="pool"/>
                                <label for="pool">Pool</label>
                                <br/>
                                <input id="gym" type="checkbox" name="amenity" value="gym"/>
                                <label for="gym">Gym</label>
                                <br/>

                                <input id="parking" type="checkbox" name="amenity" value="checkbox"/>
                                <label for="parking">Parking</label>
                                <br/>
                                <input id="workspace" type="checkbox" name="amenity" value="workspace"/>
                                <label for="workspace">Workspace</label>
                                <br/>

                      </div> 
                                
                        <div className="cs">      
                                <input id="wifi" type="checkbox" name="amenity" value="wifi"/>
                                <label for="wifi">Wifi</label>
                                <br/>
                                <input id="airConditioning" type="checkbox" name="amenity" value="airConditioning"/>
                                <label for="airConditioning">Air Conditioning</label>
                                <br/>

                                <input id="Tv" type="checkbox" name="amenity" value="Tv"/>
                                <label for="Tv">Tv</label>
                                <br/>
                                <input id="breakfast" type="checkbox" name="amenity" value="breakfast"/>
                                <label for="breakfast">Breakfast</label>
                                <br/>

                      </div>
                      <br></br>     
                        <h5><b>SAFETY AMENITIES</b></h5>
                        <div className="cs">      
                                <input id="fak" type="checkbox" name="amenity" value="fak"/>
                                <label for="fak">First Aid Kit</label>
                                <br/>
                                <input id="fe" type="checkbox" name="amenity" value="fe"/>
                                <label for="fe">Fire Extinguisher</label>
                                <br/>

                                <input id="sd" type="checkbox" name="amenity" value="sd"/>
                                <label for="sd">Smoke Detector</label>
                                <br/>
                                
                      </div> 
                      <br></br> 

                      <h5><b>HOUSE RULES</b></h5>
                        <div className="cs">      
                                <input id="nopets" type="checkbox" name="rules" value="nopets"/>
                                <label for="nopets">No Pets</label>
                                <br/>
                                <input id="nodrinking" type="checkbox" name="rules" value="nodrinking"/>
                                <label for="nodrinking">No Drinking</label>
                                <br/>

                                <input id="nosmoking" type="checkbox" name="rules" value="nosmoking"/>
                                <label for="nosmoking">No Smoking</label>
                                <br/>
                                
                      </div> 
                      <br></br> 

                      
                    <center>
                    <div>
                        <input className="next1" id = "next1" type="button" name = "Next" value = "Next" onClick={this.myFunction1}/>
                    </div>
                    </center>
                    <br></br>
                    
                   
                </div>
                
                
           
           <br></br>
           <br></br>
             
          </div>
          <div id="upload">
                    <br></br>
                    <br></br>
                    <div className="box">
                    <center><h2><b> UPLOAD IMAGES</b></h2></center>
                    <br></br>
                    <br></br>
                    
                    <input className="prop" type="file" name="file" accept="image/*"/>
                    <br></br>
                    <br></br>
                    <center>
                    <input className="next1" id = "next2" type="button" name = "Next" value = "Next" onClick={this.myFunction2}/>
                    </center>
                    <br></br>
                    </div>
                    <br></br>
                    <br></br>
                </div>


                <div id="calender">
                    <br></br>
                    <br></br>
                    <div className="box">
                    <center><h2><b> DECIDE HOW YOU WANT TO HOST</b></h2></center>
                    <br></br>
                    <br></br>
                   <h5><b>CHECK-IN AND CHECK-OUT</b></h5>
                   <div className="cs">

                    <Calender fromDate={this.state.fromDate} toDate={this.state.toDate} ontoDateDataChanged={this.ontoDateDataChanged} onfromDateDataChanged={this.onfromDateDataChanged}/>
                    </div>
                    <br></br>
                    <h5><b>PRICE</b></h5>
                    <input  className = "ts" type="text" name="price" placeholder="price"/><br></br>
                    <br></br>

                    <br></br>
                    <br></br>
                    <center>
                    <input className="next1" id = "next3" type="button" name = "Edit" value = " Edit!!  " onClick={this.myFunction3}/>
                    <input className="next1" id = "next4" type="button" name = "Submit" value = "Submit"  onSubmit={this.onClickSubmit}/>
                    
                    </center>
                    <br></br>
                    </div>
                    <br></br>
                    <br></br>
                </div>

            </form>
          </section>
            <section>
          <br></br>
          
          <center>
           <div className = "container1">
           <br/>
           <p className="title">ABOUT RENTAWAY </p> 
           <br/>
           <ul className="align">
           
          <li><h1>What is Rent@way?</h1>
           <p className="page1">RentAway connects people with places to stay and things to do around the world. </p>
           </li>

           <li><h1>What is hosting?</h1>
           <p className="page1">If you have an extra toom, entire home, or expertise you can earn money by renting out</p>
           </li>
           
           </ul>
           </div>   
           </center>
            </section>


          
            </div>
        );
    }

    myFunction1(event) {
        var d=document.getElementById('bg2');
        d.style.display="none";

        var f=document.getElementById('upload');
        f.style.display="block";
        
        var e=document.getElementById('calender');
       e.style.display="none";
        
      }

      myFunction2(event) {
        var d=document.getElementById('bg2');
        d.style.display="none";

        var f=document.getElementById('upload');
        f.style.display="none";
        
        var e=document.getElementById('calender');
       e.style.display="block";
        
      }

      myFunction3(event) {
        var d=document.getElementById('bg2');
        d.style.display="block";

        var f=document.getElementById('upload');
        f.style.display="none";
        
        var e=document.getElementById('calender');
       e.style.display="none";
        
      }

     
}
export default HostPage;