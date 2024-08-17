import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });

            if (res.data && res.data.token) {
                // Call the onSignIn function and pass the token and user data
                onSignIn(res.data.token, res.data.user);
                navigate('/questions');
            } else {
                alert('Login failed: Invalid response from server');
            }
        } catch (err) {
            console.error('Error during sign in:', err.message);
            alert('Login failed: ' + (err.response?.data?.msg || err.message));
        }
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
