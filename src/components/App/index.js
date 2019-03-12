import React from "react";
//import App from "./Components/App";
//import HomeSearch from "./homeSearch";
import HomePreSignin from "./homePreSignin";
<<<<<<< HEAD
import HostPage from "./hostPage";
//import HomeSearch from "./homeSearch";
=======
//import signUpModal from "./signUpModal";
import UserNavBar from "./userNavbar";
>>>>>>> ea65ed414a5fa7dc95a2dbe2ca274de389001e5c

import{
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from "react-router-dom";
import {createBrowserHistory} from 'history';
import SignUpModal from "./signUpModal";
import ResultsPage from "./resultsPage";
//import Details from "./details";
import DetailsPage from "./detailsPage";
import CheckOut from "./checkoutForm";

class App extends React.Component{

   
   render(){
      return (
         <Router>
            <Switch>            
               <Route exact path = "/homePreSignin" component={HomePreSignin}/>
               <Route exact path = "/signUp" component={SignUpModal}/>
               <Route exact path = "/resultsPage" component={ResultsPage}/>
               <Route exact path = "/detailsPage/:id" component={DetailsPage}/>
<<<<<<< HEAD
               <Route exact path = "/hostPage" component={HostPage}/>
=======
               <Route exact path = "/userPage" component={UserNavBar}/>
               <Route exact path = "/checkOut" component={CheckOut}/>
>>>>>>> ea65ed414a5fa7dc95a2dbe2ca274de389001e5c
               <Redirect to = "/homePreSignin" component={HomePreSignin}/>
            </Switch>

         </Router>
      );
      
   }
}

export default App;

