	
	
import React from "react";
//import App from "./Components/App";
//import HomeSearch from "./homeSearch";
import HomePreSignin from "./homePreSignin";
import SignUpModal from "./signUpModal";
import LoginModal from "./loginModal";
import HomeSearch from "./homeSearch";
import ResultsPage from "./resultsPage";

import{
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from "react-router-dom";
import SearchResults from "./searchResults";
import SearchFilters from "./filters";
import Test from "./test";



class App extends React.Component{

   
render(){
         
         return(
            <div>
         <Router>
            <Switch>            
               <Route exact path = "/homePreSignin" component={HomePreSignin}/>
               <Route exact path = "/signUp" component={SignUpModal}/>
               <Route exact path = "/loginModal" component={LoginModal}/>
               <Route exact path = "/homeSearch" component={HomeSearch}/>
               <Route exact path = "/results" component={SearchResults}/>
               <Route exact path = "/filters" component={SearchFilters}/>
               {/* <Route exact path = "/test" component={Test}/> */}
               <Route exact path = "/resultsPage" component={ResultsPage}/>
               <Redirect to = "/homePreSignin" component={HomePreSignin}/>
            </Switch>

         </Router>
         </div>
      );
      
   }
}

export default App;


