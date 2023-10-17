import React, { useState } from 'react';

const Home = ({ user }) => {
    return (
        <div id='welcomePage'>
            <h1 id='Welcome'>Welcome {user.name}</h1>
            <p className='WelcomeP' >Welcome to the Equity Learning Community Web Application!</p>
            <p> The purpose of this app is to help connect practitioners across time and space. We are doing very similar work but it is easy to lose track of our equity colleagues. We are joined together through this AMATYC learning community which is supported through this web application! Welcome!</p>
            
            
        </div>
    )
}

export default Home