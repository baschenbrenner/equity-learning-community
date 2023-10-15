import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const NavBar = ({ setUser }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null)
                navigate('/')
            }
        })
    }

    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/project-list'>Projects</NavLink>
            <button onClick={handleLogout} id='navButton'>Logout</button>
        </nav>
    )
}

export default NavBar