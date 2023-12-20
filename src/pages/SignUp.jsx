import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your user registration logic here, for example, making an API call
    try {
      // Assuming an imaginary signUp API function that returns a response
      const response = await signUp({ name, email, password });

      // Check the response for successful registration or failure
      if (response.success) {
        // Redirect to the user's dashboard or desired page
        console.log('User registered successfully');
      } else {
        setError('Email is already in use. Please choose a different email.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error.message);
      setError('An error occurred during sign-up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />

        <button type="submit">Sign Up</button>

        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
