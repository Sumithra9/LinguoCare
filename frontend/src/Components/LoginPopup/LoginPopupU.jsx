import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPopupU = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    
    if (user) {
      navigate('/user'); // Redirect to user page on successful login
    } else {
      alert('Invalid email or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    // Store new user in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    navigate('/user'); // Redirect to user page after signup
  };

  return (
    <div>
      <h2>User Login/Signup</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <h3>Or Signup</h3>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default LoginPopupU;
