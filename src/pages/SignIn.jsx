import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your sign-in logic here, for example, making an API call
    try {
      // Assuming an imaginary signIn API function that returns a response
      const response = await signIn({ email, password });

      // Check the response for authentication success or failure
      if (response.success) {
        // Redirect to the user's dashboard or desired page
        console.log('Sign-in successful');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error.message);
      setError('An error occurred during sign-in. Please try again.');
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        
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

        <button type="submit">Sign In</button>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
