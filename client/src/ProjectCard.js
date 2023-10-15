import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div id='encabCard'>
            <h3>{project.title}</h3>
            <Link id='listLink' to={`/project-list/${project.id}`}>Click here to learn more or add a review</Link>
        </div>
    )
}

export default ProjectCard