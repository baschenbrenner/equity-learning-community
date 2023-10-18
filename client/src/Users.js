import React, { useContext} from 'react'
import { UserContext } from './context/UserContext'
import { NavLink } from 'react-router-dom';

const Users = () => {
    const {users} = useContext(UserContext)

  return (
    <div><h1>Users </h1>
    <ul>
    {users.map(u=><li key={u.id}><NavLink to={`/users/${u.id}`}>{u.name}</NavLink> - {u.email}</li>)}
    </ul>
    
    
    
    
    
    </div>
  )
}

export default Users