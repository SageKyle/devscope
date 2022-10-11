// styles
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    console.log('log in successful,');
    // TODO add a notification modal here
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <label>
        <span>Email Address:</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        <span>Password:</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {!isPending && <button className="btn">Log in</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <div className="error">{error}</div>}
      <p className="login-option">
        don't have an account yet? <Link to="/signup">signup here</Link>
      </p>
    </form>
  );
};
