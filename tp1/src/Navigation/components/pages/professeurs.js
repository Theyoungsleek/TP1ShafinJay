import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Card';

const Professeurs = ({ prenom, nom, profilePicture, dateEmbauche,cours }) => (
  <Card>
    <Link to={`/cours/0`}>
    <div className="professeur">
    <img src={profilePicture} alt={`${prenom} ${nom}`} />
    <h3>{prenom} {nom}</h3>
    <p>Date Embauche: {dateEmbauche}</p>
    <p>Cours: {cours}</p>
  </div>
  </Link>
  </Card>
);

export default Professeurs;
