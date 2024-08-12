import React from 'react';

function HomePage() {
    return (
        <div className="homepage">
            <h2>Welcome to College Matcher!</h2>
            <p>
                Our tool helps you create a personalized list of U.S. colleges that best match your academic profile, preferences, and career aspirations. 
                Sign up or sign in to get started on your journey to finding the perfect college for you!
            </p>
            <button onClick={() => window.location.href='/signup'}>Get Started</button>
        </div>
    );
}

export default HomePage;
