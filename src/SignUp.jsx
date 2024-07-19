// src/SignUp.js
import React, { useState } from 'react';
// import './auth.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [backend, setBackend] = useState('python');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace URL with your actual backend URL
    const url = `http://localhost:5000/signup?backend=${backend}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="input-field"
          value={backend}
          onChange={(e) => setBackend(e.target.value)}
        >
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="golang">Golang</option>
        </select>
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
