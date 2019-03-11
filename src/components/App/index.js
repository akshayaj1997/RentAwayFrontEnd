import React from "react";
//import App from "./Components/App";
//import HomeSearch from "./homeSearch";
import HomePreSignin from "./homePreSignin";
import HostPage from "./hostPage";
//import HomeSearch from "./homeSearch";

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

class App extends React.Component{

   
   render(){
      return (
         <Router>
            <Switch>            
               <Route exact path = "/homePreSignin" component={HomePreSignin}/>
               <Route exact path = "/signUp" component={SignUpModal}/>
               <Route exact path = "/resultsPage" component={ResultsPage}/>
               <Route exact path = "/detailsPage/:id" component={DetailsPage}/>
               <Route exact path = "/hostPage" component={HostPage}/>
               <Redirect to = "/homePreSignin" component={HomePreSignin}/>
            </Switch>

         </Router>
      );
      
   }
}

export default App;

