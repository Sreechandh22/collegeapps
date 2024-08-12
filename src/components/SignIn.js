import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        // Perform sign-in logic here (e.g., authentication with backend)
        onSignIn(); // Update the authentication state in App.js
        navigate('/questions'); // Redirect to questions page
    };

    return (
        <div className="signin">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;
