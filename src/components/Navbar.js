import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggleTheme, theme, isAuthenticated, handleSignOut }) {
    return (
        <nav className="navbar">
            <h1 className="logo"><Link to="/">CM</Link></h1>
            <ul>
                {!isAuthenticated && (
                    <li><Link to="/signin">Sign In</Link></li>
                )}
                {isAuthenticated && (
                    <>
                        <li><Link to="/questions">Questions</Link></li>
                        <li>
                            <button onClick={handleSignOut} className="nav-button">
                                Sign Out
                            </button>
                        </li>
                    </>
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
