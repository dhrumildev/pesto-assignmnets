import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectDetails.css';
import { projectsConstant } from "../../constants/projects"

const ProjectDetails = () => {
    // Extracting project id from URL parameter
    const { id } = useParams();

    console.log("============", id)

  
    let res = {}
    projectsConstant.forEach(e => {
        if (parseInt(e.id) === parseInt(id)) {
            res = {
                id: e.id,
                title: e.title,
                description: e.description,
                rar: e.rar,
                techStack: e.techStack
            }
            // break;
            console.log("=========", e.title)

        }
    })
    return (
        <div className="project-details-container">
            <div className="jumbotron bg-light">

                <h1>{res.title}</h1>
                <p><strong>Description: </strong><pre>{res.description}</pre></p>
                <p><strong>Roles and Responsibilities: </strong><pre>{res.rar}</pre></p>
                <p><strong>Tech Stack:</strong><pre>{res.techStack}</pre></p>
            </div>
        </div>
    );
};

export default ProjectDetails;