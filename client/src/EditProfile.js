import React, {useContext, useState} from 'react'
import { UserContext } from './context/UserContext'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()
    const [profileInfo, setProfileInfo] = useState({
        username: user.username,
        name: user.name,
        email: user.email,
        bio: user.bio
    })
  
    const [errors, setErrors] = useState([])
    

    const handleSubmit = (e) => {
        e.preventDefault()
       
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileInfo),            
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {

                    setUser(user)
                    alert("Profile Info Updated!")
                    navigate('/my-projects')
                })
            }
            else {
                r.json().then((eData) => setErrors(eData.errors))
            }
        })
    }
    const handleChange = (e) => {
        setProfileInfo({...profileInfo, [e.target.name]: e.target.value})

    }

    function handleCancel(e) {
        navigate('/my-projects')
    }

  
    return (
        <form id='profileForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='Text' name="username" onChange={handleChange} value={profileInfo.username} />
            <br></br>
            
            <label>Enter your Full Name</label>
            <input type='Text' name="name" onChange={handleChange} value={profileInfo.name} />
            <br></br>
            <label>Enter a Bio (optional, can be added later)</label>
            <textarea name="bio" rows="4" cols="50" onChange={handleChange} value={profileInfo.bio}>
            </textarea>
            <br></br>
            <label>Enter your Email</label>
            <input type='Text' name="email" onChange={handleChange} value={profileInfo.email} />
            <br></br>
            {errors.length === 0 ? null : errors.map((error, idx) => <p key={idx} className='error'>{error}</p>)} 
            <button>Submit</button>
            <br></br>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
  
}

export default EditProfile