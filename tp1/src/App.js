import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import MenuNavigation from "./Navigation/MenuNavigation";
import Professeur from "./Navigation/components/Professeur";
import Cours from "./Navigation/components/Cours";
import { useState } from "react";
import CoursePage from "./Navigation/components/CoursePage";


function App() {
  const [coursList, setCoursList] = useState([
    { title: "Web et bases de données", description: "Ce cours traite de la conception et la réalisation de sites Web dynamiques et de bases de données." },
    { title: "Contexte professionnel", description: "Ce cours présente les aspects professionnels et organisationnels liés aux métiers de l'informatique." },
    { title: "Analyse et conception de modèles", description: "Ce cours porte sur les méthodes d'analyse et de conception de modèles dans le contexte du développement de logiciels." },
    { title: "Objets connectés", description: "Ce cours présente les technologies et les enjeux liés aux objets connectés et à l'Internet des objets." },
    { title: "Environnement graphique client/serveur", description: "Ce cours traite de la conception et la réalisation d'applications client/serveur avec une interface graphique." },
  ]);

  const handleAddCours = (newCours) => {
    setCoursList((prevCoursList) => [...prevCoursList, newCours]);
  };

  return (
    <Router>
      <MenuNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
          <h1>Accueil</h1>
            <p>Bienvenue sur l'application de gestion de cours.</p>
          </Route>
          <Route path="/professeurs">
            <Professeur />
          </Route>
          <Route exact path="/cours">
            <Cours coursList={coursList} addCours={handleAddCours} />
          </Route>
          <Route path="/cours/:id" render={(props) => <CoursePage coursList={coursList} match={props.match} />} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
