import React, { useState } from 'react';
import './login.scss';
import Logo from './img/logo.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Snackbar from './skenbar';

const initialState = {
  username: '',
  password: '',
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://obidjon.pythonanywhere.com/api/v1/api/login/', formData);
      localStorage.setItem('x-auth-token', response.data.token);
      localStorage.setItem('user-data', JSON.stringify(response.data.user));
      navigate('/'); // Navigate to the Home page after successful login
    } catch (err) {
      setSnackbarMessage('Username or Password is incorrect');
    } finally {
      setLoading(false);
      setFormData(initialState);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <label>Username</label>
        <div className="input">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <label>Password</label>
        <div className="input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      {snackbarMessage && (
        <Snackbar message={snackbarMessage} onClose={() => setSnackbarMessage('')} />
      )}
    </div>
  );
};

export default Login;
