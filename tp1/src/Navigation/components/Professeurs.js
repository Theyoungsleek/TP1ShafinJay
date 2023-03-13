import React, { useState } from "react";
import Card from "../Card";
import '../Card.css';

function Professeurs(props) {
  const [professeurs, setProfessurs] = useState(["Bobby schmurda", "Bob Ross", "Dababy", "Wu shang", "yomama"]);

  const ajoutProfesseur = () => {
    const newProfesseurs = [...professeurs, "Nouveau Professeur"];
    setProfessurs(newProfesseurs);
  };

  return (
    <div>
      <ul>
        {professeurs.map((professeur, index) => (
          <Card key={index}>{professeur}</Card>
        ))}
      </ul>
      <button onClick={ajoutProfesseur}>Ajouter un Professeur</button>
    </div>
  );
}

export default Professeurs;