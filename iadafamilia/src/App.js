import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);

    const toggleDarkMode = (isDark) => {
        setDarkMode(isDark);
        document.body.classList.toggle('dark-mode', isDark);
    };

    const handleFontSizeChange = (size) => {
        setFontSize(size);
    };

    return (
        <Router>
            <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route
                        path="/dashboard"
                        element={<DashboardPage />}
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/home"
                        element={
                            <HomePage
                                onToggleDarkMode={toggleDarkMode}
                                onFontSizeChange={handleFontSizeChange}
                                fontSize={fontSize}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
