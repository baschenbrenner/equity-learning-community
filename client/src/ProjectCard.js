import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div id='encabCard'>
            <h3>{project.title}</h3>
            <h4>by {project.username}</h4>
            <p>{project.short_description}</p>
            <Link id='listLink' to={`/project-list/${project.id}`}>Click here to learn more or add a comment</Link>
        </div>
    )
}

export default ProjectCard