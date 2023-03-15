import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cours from "./Cours";
import CoursePage from "./CoursePage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cours">Cours</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cours" component={Cours} />
          {coursList.map((course, index) => (
            <Route
              key={index}
              exact
              path={`/cours/${course}`}
              render={(props) => <CoursePage {...props} course={course} />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

const coursList = [
  "Web et bases de données",
  "Contexte professionnel",
  "Analyse et conception de modèles",
  "Objet connectés",
  "Environnement graphique client/serveur",
];

export default App;
