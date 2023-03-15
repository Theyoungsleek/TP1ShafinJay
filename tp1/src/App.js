import logo from './logo.png';
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import MenuNavigation from "./Navigation/MenuNavigation";
import Professeurs from "./Navigation/components/Professeurs";

import Cours from "./Navigation/components/Cours";


function Accueil() {
  return (
    <Router>
      <MenuNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
   
          </Route>
          <Route path="/professeurs">
            <Professeurs />
          </Route>
          <Route path="/cours">
            <Cours />
          </Route>
        </Switch>
      </main>
    </Router>
    
  );
}




export default Accueil;
