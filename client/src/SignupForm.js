import React, { useState, useContext } from 'react';
import { UserContext } from './context/UserContext';

const SignupForm = ({ setLogin }) => {
    const [signupInfo, setSignupInfo] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        bio: ""

    })
  
    const [errors, setErrors] = useState([])
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
       
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupInfo),            
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
    const handleChange = (e) => {
        setSignupInfo({...signupInfo, [e.target.name]: e.target.value})

    }
 

    return (
        <form id='signupForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='Text' name="username" onChange={handleChange} value={signupInfo.username} />
            <label>Password</label>
            <input type='Text' name="password" onChange={handleChange} value={signupInfo.password} />
            <label>Enter your Full Name</label>
            <input type='Text' name="name" onChange={handleChange} value={signupInfo.name} />
            <label>Enter a Bio (optional, can be added later)</label>
            <textarea name="bio" rows="4" cols="50" onChange={handleChange} value={signupInfo.bio}>
            </textarea>
            <label>Enter your Email</label>
            <input type='Text' name="email" onChange={handleChange} value={signupInfo.email} />
            {errors.length === 0 ? null : errors.map(error => <p className='error'>{error}</p>)} 
            <button>Submit</button>
        </form>
    )
}

export default SignupForm