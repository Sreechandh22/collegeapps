import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggleTheme, theme, isAuthenticated, handleSignOut }) {
    return (
        <nav className="navbar">
            <div className="logo">CM</div>
            <ul>
                {!isAuthenticated && (
                    <>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <li><Link to="/questions">Questions</Link></li>
                        <li><button onClick={handleSignOut}>Sign Out</button></li>
                    </>
                )}
                <li>
                    <button onClick={toggleTheme}>
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
