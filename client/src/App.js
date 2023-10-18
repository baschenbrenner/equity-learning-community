import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import NavBar from './Navbar';
import ProjectList from './ProjectList';
import Project from './Project';
import Home from './Home';
import AddProjectForm from './AddProjectForm';
import { UserContext } from './context/UserContext';
import EditProfile from './EditProfile';
import Users from './Users';
import UserPage from './UserPage';


function App() {
  const [projects, setProjects] = useState([])
  const { user, setUser } = useContext(UserContext);
  
  useEffect(() => {
      fetch('/projects')
      .then((r) => r.json())
      .then((item) => setProjects(item))
      .catch(error => console.log(error))
  }, [user])

  if (!user) return <Login />
  if(!projects) return <h2>Loading</h2>

  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <Routes>
        <Route exact path = "/" element={<Home user={user} />}/>
      
        <Route exact path = "/project-list" element={<ProjectList projects={projects} setProjects={setProjects}/>}/>
        <Route exact path = "/my-projects" element={<ProjectList projects={user.created_projects} setProjects={setProjects} type={"created"}/>}/>
  
        <Route path = "/project-list/:id" element={<Project projects={projects} setProjects={setProjects} user={user}/>}/>
        <Route path="/edit-profile" element={<EditProfile />}/>          
        <Route path="/project-form" element={<AddProjectForm projects={projects} setProjects={setProjects}/>}/>          
        <Route path="/all-users" element={<Users />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
