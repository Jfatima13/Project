// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; // No changes here
import QuizState from './context/QuizState';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import ReviewAnswer from './pages/Review/ReviewAnswer';
import Login from './pages/Login';
import Register from './pages/Register';

// Import Firebase
import { auth } from './components/firebase'; // Updated path to firebase.js

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <QuizState>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            {/* Main Route */}
            <Route
              path="/"
              element={
                user ? (
                  <Navigate to="/home" />
                ) : (
                  <>
                    <h1>{isLogin ? 'Login' : 'Register'}</h1>
                    {isLogin ? <Login /> : <Register />}
                    <p>
                      {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
                      <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Register' : 'Login'}
                      </button>
                    </p>
                  </>
                )
              }
            />

            {/* Protected Routes */}
            <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
            <Route path="/about" element={user ? <About /> : <Navigate to="/" />} />
            <Route path="/review" element={user ? <ReviewAnswer /> : <Navigate to="/" />} />

            {/* Login/Register Routes */}
            <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />

            {/* Catch-all Route */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </QuizState>
  );
}

export default App;
