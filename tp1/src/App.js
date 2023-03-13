import logo from './logo.png';
import './App.css';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import MenuNavigation from "./Navigation/MenuNavigation";
import Professeurs from "./Navigation/components/Professeurs"


function Accueil() {
  return (
    <Router>
      <MenuNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Professeurs />
          </Route>
        </Switch>
      </main>
    </Router>
    
  );
}




export default Accueil;
