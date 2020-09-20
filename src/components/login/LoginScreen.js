import React from 'react';

export const LoginScreen = ( {history} ) => {

    const handleLogin = () => {
        history.replace("/");
    }

    return (
        <div>
            <h1>Login</h1>
            
            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Log in
            </button>
        </div>
    )
}
