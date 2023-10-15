import React, { useState, useContext } from 'react';
import { UserContext } from './context/UserContext';

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((r) => {
            if (r.ok) {
            r.json().then(user => setUser(user))
            }
            else {
                r.json().then(error => setErrors(error.errors))
            }
        })
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    
    return (
        <form id='loginForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='Text' value={username} onChange={handleUsernameChange} />
            <label>Password</label>
            <input type='Password' value={password} onChange={handlePasswordChange} />
            {errors ? <p>{errors}</p> : null}
            <button>Login</button>
        </form>
    )
}

export default LoginForm