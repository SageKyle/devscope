// Styles and images
import { Link } from 'react-router-dom';
import Temple from '../assets/temple.svg';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <img src={Temple} alt="devscope synergy logo" />
          <span>DevScope Synergy</span>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>signup</Link>
        </li>

        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
};
