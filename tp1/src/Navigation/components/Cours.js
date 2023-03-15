import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Course(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function Cours(props) {
  const [coursList, setCoursList] = useState([
    { title: "Web et bases de données", description: "Description de Web et bases de données" },
    { title: "Contexte professionnel", description: "Description de Contexte professionnel" },
    { title: "Analyse et conception de modèles", description: "Description de Analyse et conception de modèles" },
    { title: "Objet connectés", description: "Description de Objet connectés" },
    { title: "Environnement graphique client/serveur", description: "Description de Environnement graphique client/serveur" },
  ]);

  const [newCours, setNewCours] = useState("");

  const handleInputChange = (event) => {
    setNewCours(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newCours) {
      setCoursList([...coursList, { title: newCours, description: "" }]);
      setNewCours("");
    }
  };

  const handleCourseClick = (index) => {
    const updatedCoursList = [...coursList];
    updatedCoursList[index].description = "Description de " + updatedCoursList[index].title;
    setCoursList(updatedCoursList);
    props.history.push(`/cours/${updatedCoursList[index].title}`);
  };

  return (
    <div>
      <h2>Cours</h2>
      <ul>
        {coursList.map((cours, index) => (
          <li key={index}>
            <Link to={`/cours/${cours.title}`} onClick={() => handleCourseClick(index)}>
              {cours.title}
            </Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newCours">Nouveau Cours:</label>
        <input
          type="text"
          id="newCours"
          name="newCours"
          value={newCours}
          onChange={handleInputChange}
        />
        <button type="submit">Ajouter</button>
      </form>
      <Switch>
        {coursList.map((cours, index) => (
          <Route path={`/cours/${cours.title}`} key={index}>
            <Course title={cours.title} description={cours.description} />
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default Cours;
