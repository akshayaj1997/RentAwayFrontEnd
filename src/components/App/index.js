import React from "react";
//import App from "./Components/App";
//import HomeSearch from "./homeSearch";
import HomePreSignin from "./homePreSignin";
import{
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from "react-router-dom";
import {createBrowserHistory} from 'history';
import AccidentUpdate from "./accidentUpdate";
import AccidentMaps from "./accidentMap";
import LoginPage from './loginPage';

class App extends React.Component{

   constructor(props) {
      super(props);
     
    }
  
   
   render(){
      return (
         <div>
        <div> 
        </div>
         <Router>
            <Switch>            
               <Route exact path = "/homePreSignin" component={HomePreSignin}/>
               {/* <Route exact path = "/signUp" component={signUpModal}/> */}
               <Route exact path = "/Landing" component={LoginPage}/>
               <Route exact path='/updateUser' component={AccidentUpdate}/>
               <Route exact path='/accidentMap' component={AccidentMaps}/>
               <Redirect to = "/Landing" component={HomePreSignin}/>
               
            </Switch>

         </Router>
         </div>
      );
      
   }
}

export default App;

