import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import QuestionsPage from './components/QuestionsPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import './styles/styles.css';

function App() {
    const [theme, setTheme] = useState('dark');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Handle user sign-in, store token and user info
    const handleSignIn = (token, userData) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    };

    // Handle user sign-out, clear token and user info
    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };

    // Load user data from local storage on app initialization
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (token && storedUser) {
            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className={`app ${theme}`}>
            <Router>
                <Navbar
                    toggleTheme={toggleTheme}
                    theme={theme}
                    isAuthenticated={isAuthenticated}
                    handleSignOut={handleSignOut}
                />
                <Routes>
                    <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
                    <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUp onSignIn={handleSignIn} />} />
                    <Route path="/signin" element={isAuthenticated ? <Navigate to="/" /> : <SignIn onSignIn={handleSignIn} />} />
                    <Route
                        path="/questions"
                        element={
                            <PrivateRoute isAuthenticated={isAuthenticated}>
                                <QuestionsPage />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
