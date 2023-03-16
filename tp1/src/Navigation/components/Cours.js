import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import CoursePage from "./CoursePage";

function Cours(props) {
  const [newCours, setNewCours] = useState({ title: "", description: "" });
  const [students, setStudents] = useState([
    { name: "John", class: "Web et bases de données" },
    { name: "Jane", class: "Web et bases de données" },
    { name: "Mike", class: "Web et bases de données" },
    { name: "Bob", class: "Web et bases de données" },
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCours((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.addCours(newCours);
    setNewCours({ title: "", description: "" });
  };

  const handleStudentSignup = (name, className) => {
    const newStudents = [...students];
    const classSize = newStudents.filter((student) => student.class === className).length;
    const isAlreadySignedUp = newStudents.some((student) => student.name === name);

    if (classSize < 5 && !isAlreadySignedUp) {
      newStudents.push({ name: name, class: className });
      setStudents(newStudents);
    }
  };

  return (
    <div>
      <h1>Liste des cours</h1>
      <ul>
        {props.coursList.map((cours, index) => (
          <li key={index}>
            <Link to={`/cours/${index}`}>
              {cours.title} ({students.filter((student) => student.class === cours.title).length}/5)
            </Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newCours.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={newCours.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
      <Route path="/cours/:id">
        <CoursePage cours={props.coursList} handleStudentSignup={handleStudentSignup} />
      </Route>
    </div>
  );
}

export default Cours;
