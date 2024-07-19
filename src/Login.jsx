import React, { useState } from 'react';
import './auth.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backend, setBackend] = useState('python');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, backend });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
