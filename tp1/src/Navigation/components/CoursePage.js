import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CoursePage(props) {
  const { id } = useParams();
  const course = props.coursList[id];
  const students = props.students.filter((student) => student.class === course.title);

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Capacity: {students.length}/5</p>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
      <button onClick={() => props.handleStudentSignup('Alice', course.title)}>Sign up</button>
      <Link to="/cours">Back to courses</Link>
    </div>
  );
}

export default CoursePage;
