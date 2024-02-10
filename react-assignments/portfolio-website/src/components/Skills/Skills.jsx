
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css'; // Import your custom styles if needed
import { Link } from 'react-router-dom';

const SkillsPage = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Express',
    'MongoDB',
    'Git',
    'Webpack',
    'Redux',
    // Add more skills as needed
  ];

  return (
    <div className="skills-container">
      <header className="text-center">
        <h1 className="display-3 text-primary">My Skills</h1>
        <p className="lead text-muted">Here are some of the skills I possess:</p>
      </header>

      <section className="skills-section">
        <ul className="list-group">
          {skills.map((skill, index) => (
            <li key={index} className="list-group-item">{skill}</li>
          ))}
        </ul>
      </section>
      <section className="intro-section text-center">
        <Link to={`/`}>
          <button className="btn btn-primary mr-2">Home</button>
        </Link>
        <Link to={`/contact`}>
          <button className="btn btn-primary mx-2">Contact</button>
        </Link>
        <Link to={'/skills'}>
          <button className="btn btn-primary m1-2">Skills</button>
        </Link>
      </section>

      <footer className="text-center mt-4">
        <p className="text-muted">&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
};

export default SkillsPage;
