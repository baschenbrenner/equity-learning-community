import React, { useState } from 'react';

const Home = ({ user }) => {
    return (
        <div id='welcomePage'>
            <h1 id='Welcome'>Welcome {user.name}</h1>
            <p className='WelcomeP' >Welcome to the Equity Learning Community Web Application!</p>
            
            
        </div>
    )
}

export default Home