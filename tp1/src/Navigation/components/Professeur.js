import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Professeurs from './pages/professeurs';
import './Professeur.css';

const Professeur = () => {
  const [professeur, setProfesseur] = useState([
    {
    prenom: 'Simon',
    nom: 'Deschênes',
    profilePicture: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    dateEmbauche: '2010-06-25',
    cours: 'Objets connectés',
    link: '/cours/3',
    },
    {
      prenom: 'Louis',
      nom: 'Bouchard',
      profilePicture: 'https://images.pexels.com/photos/7823/selfie.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      dateEmbauche: '2015-09-07',
      cours: 'Analyse et conception de modèl'
    },
    {
        prenom: 'Sylvain',
        nom: 'Labranche',
        profilePicture: 'https://images.pexels.com/photos/16622/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        dateEmbauche: '2018-11-24',
        cours: 'Web et bases de données'
    },
    {
          prenom: 'Marianne',
          nom: 'Forget',
          profilePicture: 'https://images.pexels.com/photos/41539/attractive-beautiful-brunette-cute-41539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          dateEmbauche: '2014-06-22',
          cours: 'Comm contexte professionnel'
    },
    {
      prenom: ' Mathieu',
      nom: 'Bergeron',
      profilePicture: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      dateEmbauche: '2015-08-31',
      cours: 'Environnement graphique client'
}
  ]);
  const [formState, setFormState] = useState({
    prenom: '',
    nom: '',
    profilePicture: '',
    dateEmbauche: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfesseur([...professeur, formState]);
    setFormState({
      prenom: '',
      nom: '',
      profilePicture: '',
      dateEmbauche: '',
    });
  };

  return (
    <div className="TeacherPage">
      <div className="teacher-list">
        {professeur.map((professeur, index) => (
          <Professeurs key={index} {...professeur} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
  <input
    type="text"
    name="prenom"
    value={formState.prenom}
    onChange={handleChange}
    placeholder="First Name"
    required
  />
  <input
    type="text"
    name="nom"
    value={formState.nom}
    onChange={handleChange}
    placeholder="Last Name"
    required
  />
  <input
    type="url"
    name="profilePicture"
    value={formState.profilePicture}
    onChange={handleChange}
    placeholder="Profile Picture URL"
    required
  />
  <input
    type="date"
    name="dateEmbauche"
    value={formState.dateEmbauche}
    onChange={handleChange}
    required
  />
  <button type="submit">Add Teacher</button>
</form>
    </div>
  );
};

export default Professeur;
