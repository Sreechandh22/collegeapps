import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignIn({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            onSignIn(res.data.token, res.data.user);
            navigate('/questions');
        } catch (err) {
            console.error(err.response.data.msg);
            alert(err.response.data.msg);
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
