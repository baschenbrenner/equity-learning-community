import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import AddProjectForm from './AddProjectForm';


const ProjectList = ({ projects, setProjects }) => {
    const [newProj, setNewproj] = useState(false)


    const onAddProjClick = () => {
        setNewproj(true)
    }

    if (projects.length == 0) return <h2>Loading...</h2>

    return (
        <div>
            <h1 id='projH1'>Browse through some projects</h1>
            <p id='projP'>Don't see you favorite project? Click on the button to add a new one!</p>
            {newProj === false ? <button id='projAddButton' onClick={onAddProjClick}>Click to add a new project</button> : <AddProjectForm setNewproj={setNewproj} setProjects={setProjects} projects={projects}/>}
            <div>
                {projects.map(p=><ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    )

}



export default ProjectList