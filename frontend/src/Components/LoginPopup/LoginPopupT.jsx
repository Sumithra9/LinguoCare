import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPopupT = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // Retrieve therapists from local storage
    const therapists = JSON.parse(localStorage.getItem('therapists')) || [];
    const therapist = therapists.find((therapist) => therapist.email === email && therapist.password === password);
    
    if (therapist) {
      navigate('/therapist'); // Redirect to therapist page on successful login
    } else {
      alert('Invalid email or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    // Store new therapist in local storage
    const therapists = JSON.parse(localStorage.getItem('therapists')) || [];
    therapists.push({ name, email, password });
    localStorage.setItem('therapists', JSON.stringify(therapists));

    navigate('/therapist'); // Redirect to therapist page after signup
  };

  return (
    <div>
      <h2>Therapist Login/Signup</h2>
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

export default LoginPopupT;
