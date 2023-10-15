import React, { useState, useContext } from 'react';
import { UserContext } from './context/UserContext';

const SignupForm = ({ setLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmation, setConfirmation] = useState('')
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username,
            password,
            password_confirmation: confirmation,
            name
        }
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),            
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
                .then(setLogin(true))
            }
            else {
                r.json().then((eData) => setErrors(eData.errors))
            }
        })
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmation = (e) => {
        setConfirmation(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    return (
        <form id='signupForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='Text' onChange={handleUsername} value={username} />
            <label>Password</label>
            <input type='Password' onChange={handlePassword} value={password} />
            <label>Confirm Password</label>
            <input type='Password' onChange={handleConfirmation} value={confirmation} />
            <label>Enter your display name</label>
            <input type='Text' onChange={handleName} value={name} />
            {errors.length === 0 ? null : errors.map(error => <p className='error'>{error}</p>)} 
            <button>Submit</button>
        </form>
    )
}

export default SignupForm