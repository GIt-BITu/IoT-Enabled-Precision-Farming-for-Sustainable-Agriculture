import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

import LoginPage from './component/LoginPage.jsx';
import RegistrationPage from './component/RegistrationPage.jsx';

function AuthRoutes() {
  const [user, setUser] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    if (user?.role) {
      switch (user.role.toLowerCase()) {
        case 'admin':
          navigate('/admin', { replace: true });
          break;
        case 'farmer':
          navigate('/farmer', { replace: true });
          break;
        default:
          navigate('/dashboard', { replace: true });
      }
    }
  }, [user, navigate]);

  return (
      <div className="auth-wrapper App">
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="register" element={<RegistrationPage />} />
        </Routes>

        {!user && location.pathname !== '/signin/register' && (
            <p className="registration-link">
              Don't have an account? <Link to="/signin/register">Click here to register</Link>
            </p>
        )}
      </div>
  );
}

export default AuthRoutes;
