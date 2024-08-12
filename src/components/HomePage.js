import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ isAuthenticated }) {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        if (isAuthenticated) {
            navigate('/questions');
        } else {
            navigate('/signin');
        }
    };

    return (
        <div className="homepage">
            <h2>Welcome to College Matcher</h2>
            <p>Your personalized guide to finding the perfect college.</p>
            <button onClick={handleGetStarted}>Get Started</button>
        </div>
    );
}

export default HomePage;
