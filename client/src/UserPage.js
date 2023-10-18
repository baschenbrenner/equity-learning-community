import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { useParams } from 'react-router-dom'

const UserPage = () => {
const {users} = useContext(UserContext)
const { id } = useParams()
const foundUser = users.find(u => u.id === parseInt(id) )
console.log(foundUser)
if (!foundUser) return <div> <h1> Loading ... </h1></div>

  return (
    <div>
        <h1>{foundUser.name}</h1>
        <h2>username: {foundUser.username}</h2>
        <h2>email: {foundUser.email}</h2>

        <ul>
          {foundUser.created_projects.map( p=><li key={p.id}> {p.title} </li>)}

        </ul>




    </div>
  )
}

export default UserPage