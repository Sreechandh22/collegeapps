import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp({ onSignIn }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            // Send sign-up data to the backend
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                firstName,
                lastName,
                dob,
                email,
                password,
            });

            // On successful sign-up, sign in the user automatically
            if (res.data && res.data.token) {
                onSignIn(res.data.token, res.data.user);
                navigate('/questions'); // Redirect to questions page
            } else {
                alert('Sign up failed: Invalid response from server');
            }
        } catch (err) {
            console.error('Error during sign up:', err.message);
            alert('Sign up failed: ' + (err.response?.data?.msg || err.message));
        }
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
