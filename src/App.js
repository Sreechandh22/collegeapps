import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import QuestionsPage from './components/QuestionsPage';
import Navbar from './components/Navbar';
import './styles/styles.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/questions" element={<QuestionsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
