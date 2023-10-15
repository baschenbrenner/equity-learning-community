import React, { useState, useContext } from 'react';
import { UserContext } from './context/UserContext';

const AddProjectForm = ({ projects, setProjects, setNewProj }) => {
    const {user, setUser} = useContext(UserContext)
    const [projectInfo, setProjectInfo] = useState({
        title: "",
        description: "",
        main_goal: "",
        secondary_goal: ""

    })
  
    
    const [errors, setErrors] = useState([])
    
    
    const handleChange = (e) => {
        setProjectInfo({...projectInfo, [e.target.name]: e.target.value })
    }
    
   

    const handleNewprojectClick = (e) => {
        e.preventDefault()
      
        fetch ('/projects', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(projectInfo),            
        })
        .then ((r) => {
            if (r.ok) {
                r.json().then ((newProj) => {
                    addProj(newProj)
                    setProjectInfo({
                        title: "",
                        description: "",
                        main_goal: "",
                        secondary_goal: ""
                
                    })
                    setNewProj(false)


                })
            
            }
            else {
                r.json().then((eData) => setErrors(eData.errors))
            }
        })
    }

    const addProj = (proj) => {
        setUser({...user, created_projects: [...user.created_projects, proj]})
        setProjects(projects.concat(proj))
    }

    return (
        <form id='ProjForm' onSubmit={handleNewprojectClick}>
            <label>Project Title: </label>
            <input type='TEXT' name="title" value={projectInfo.title} onChange={handleChange} /> 
            <br></br> 
            <label>Description: </label>
            <textarea name="description" rows="4" cols="50" onChange={handleChange} value={projectInfo.description}>
            </textarea>
            <br></br> 
            <label> Main Goal </label>
            <input type='TEXT' name="main_goal" value={projectInfo.main_goal} onChange={handleChange} />
            <br></br> 
            <label> Secondary Goal </label>
            <input type='TEXT' name="secondary_goal" value={projectInfo.secondary_goal} onChange={handleChange} />
            <br></br>
            {errors.length === 0 ? null : errors.map(error => <p className='error'>{error}</p>)}
            <button>Submit</button>
        </form>
    )
}

export default AddProjectForm