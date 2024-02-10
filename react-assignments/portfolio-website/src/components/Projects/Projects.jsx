
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';
import { Link } from 'react-router-dom';
import { projectsConstant } from "../../constants/projects"

const Projects = () => {

    return (
        <div className="projects-container">
            <h1 className="text-center mb-4">Projects</h1>

            <div className="project-list">


                {projectsConstant.map((project) => (
                    <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
                        <h4>{project.title}</h4>
                    </Link>
                ))}
            </div>
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
                <p className="text-muted">&copy; 2024 DHRUMIL SHAH</p>
            </footer>

        </div>
    );
};

export default Projects;
