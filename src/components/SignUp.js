import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ onSignIn }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Perform sign-up logic here (e.g., sending data to backend)
        onSignIn(); // Update the authentication state in App.js
        navigate('/questions'); // Redirect to questions page
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required 
                />
                <input 
                    type="date" 
                    placeholder="Date of Birth" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required 
                />
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
