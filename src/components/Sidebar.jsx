// styles and images
import { NavLink } from 'react-router-dom';
import AddIcon from '../assets/add_icon.svg';
import DashboardIcon from '../assets/dashboard_icon.svg';
import { useAuthContext } from '../hooks/useAuthContext';
import { Avatar } from './Avatar';
import './Sidebar.css';

export const Sidebar = () => {
  const { user } = useAuthContext();

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>

        <nav className="links">
          <ul>
            <li>
              <NavLink end to="/">
                <img src={DashboardIcon} alt="dashboard" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add project" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
