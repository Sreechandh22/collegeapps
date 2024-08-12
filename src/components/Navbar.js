import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggleTheme, theme, isAuthenticated, handleSignOut }) {
    return (
        <nav className="navbar">
            <h1>College Matcher</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                {!isAuthenticated && (
                    <li><Link to="/signin">Sign In</Link></li>
                )}
                {isAuthenticated && (
                    <li>
                        <button onClick={handleSignOut} className="nav-button">
                            Sign Out
                        </button>
                    </li>
                )}
                <li>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
