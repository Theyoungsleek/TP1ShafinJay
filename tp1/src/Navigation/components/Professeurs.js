import { useState } from "react";
import Card from "../Card"

function Professeurs(props) {
  const { professeurs } = props;
  const [newProfesseur, setNewProfesseur] = useState({
    nom: "",
    prenom: "",
    photo: "",
    dateEmbauche: "",
    cours: [],
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewProfesseur((prevProfesseur) => ({
      ...prevProfesseur,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("New teacher:", newProfesseur);
    setNewProfesseur({
      nom: "",
      prenom: "",
      photo: "",
      dateEmbauche: "",
      cours: [],
    });
  }

  if (!professeurs || professeurs.length === 0) {
    return <p>Aucun professeur à afficher pour le moment.</p>;
  }

  return (
    <div className="professeurs">
      <form onSubmit={handleFormSubmit}>
        <h2>Ajouter un nouveau professeur:</h2>
        <label>
          Nom:
          <input
            type="text"
            name="nom"
            value={newProfesseur.nom}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Prénom:
          <input
            type="text"
            name="prenom"
            value={newProfesseur.prenom}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Photo:
          <input
            type="text"
            name="photo"
            value={newProfesseur.photo}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date d'embauche:
          <input
            type="date"
            name="dateEmbauche"
            value={newProfesseur.dateEmbauche}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
      {professeurs.map((professeur) => (
        <Card key={professeur.id}>
          <img src={professeur.photo} alt={professeur.nom} />
          <div className="card-content">
            <h2>{`${professeur.nom} ${professeur.prenom}`}</h2>
            <p>Date d'embauche: {professeur.dateEmbauche}</p>
            <h3>Cours enseignés:</h3>
            <ul>
              {professeur.cours.map((cours) => (
                <li key={cours.id}>{cours.nom}</li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Professeurs;