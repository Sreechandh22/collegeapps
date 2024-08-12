import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import QuestionsPage from './components/QuestionsPage';
import Navbar from './components/Navbar';
import './styles/styles.css';

function App() {
    const [theme, setTheme] = useState('dark');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const handleSignIn = () => {
        setIsAuthenticated(true);
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
    };

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
                    <Route path="/signup" element={<SignUp onSignIn={handleSignIn} />} />
                    <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
                    {isAuthenticated && <Route path="/questions" element={<QuestionsPage />} />}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
