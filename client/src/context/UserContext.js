import React, { useState, useEffect, } from 'react';

const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([])



    useEffect(() => { 
        fetch("/me")
        .then((r) => {
          if (r.ok) {
            r.json().then((user)=>setUser(user))
          }
        })

        fetch('/users',{
          headers: {
              "Content-Type": "application/json",
          },
        })
        .then(r=>r.json())
        .then(usersData => setUsers(usersData))

      }, [])
  
    return (
      <UserContext.Provider value={{user, setUser, users, setUsers}}>
        {children}
      </UserContext.Provider>
    );
  }

  export { UserContext, UserProvider }