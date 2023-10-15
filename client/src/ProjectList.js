import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import AddProjectForm from './AddProjectForm';


const ProjectList = ({ projects, setProjects, type }) => {
    const [newProj, setNewProj] = useState(false)


    const onAddProjClick = () => {
        setNewProj(true)
    }
    if (type==="created") return (<div>
        <h1 id='projH1'>Your Projects</h1> 
        <div>
            {projects.map(p=><ProjectCard key={p.id} project={p} />)}
        </div>
       
        {newProj === false ? <button id='projAddButton' onClick={onAddProjClick}>Click to add a new project</button> : <AddProjectForm setNewProj={setNewProj} setProjects={setProjects} projects={projects}/>}
       
    </div>)

    if (projects.length === 0) return <h2>Loading...</h2>


    return (
        <div>
            <h1 id='projH1'>Browse through some projects</h1>
            <p id='projP'>Don't see you favorite project? Click on the button to add a new one!</p>
            {newProj === false ? <button id='projAddButton' onClick={onAddProjClick}>Click to add a new project</button> : <AddProjectForm setNewproj={setNewProj} setProjects={setProjects} projects={projects}/>}
            <div>
                {projects.map(p=><ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    )

}



export default ProjectList