// Styles and images
import { Link } from 'react-router-dom';
import Temple from '../assets/temple.svg';
import { useLogout } from '../hooks/useLogout';
import './Navbar.css';

export const Navbar = () => {
  const { logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
    console.log(isPending);
  };

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="devscope synergy logo" />
          <span>DevScope Synergy</span>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>signup</Link>
        </li>

        <li>
          {isPending && (
            <button className="btn" disabled>
              Logging out
            </button>
          )}
          {!isPending && (
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
