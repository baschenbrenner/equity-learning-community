import React, { useState, useContext } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Login = () => {
    const [login, setLogin] = useState(true)
    

    return (
        <div id='login'>
            {login ? (
                <div id='loginForm'>
                    <LoginForm />
                    <button id='loginButton' onClick= {()=>setLogin(false)}>Don't have an account?</button>
                </div>
            ) : (
                <div>
                    <SignupForm setLogin={setLogin}/>
                    <button id='signupButton' onClick={() => setLogin(true)}>Already have an account?</button>
                </div>
            )}
        </div>
    )
}

export default Login