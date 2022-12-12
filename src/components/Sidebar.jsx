import { NavLink } from 'react-router-dom';

// styles and images
import AddIcon from '../assets/add_icon.svg';
import { Avatar } from './Avatar';
import './Sidebar.css';

import DashboardIcon from '../assets/dashboard_icon.svg';
import { useAuthContext } from '../hooks/useAuthContext';

export const Sidebar = () => {
	const { user } = useAuthContext();

	return (
		<div className="sidebar ">
			<div className="sidebar-content">
				<div className="user">
					<Avatar src={user.photoURL} />
					<p className="user__greeting">
						<span className="sidebar__text">Hey </span>
						{user.displayName}
					</p>
				</div>

				<nav className="links">
					<ul>
						<li>
							<NavLink end to="/dashboard">
								<img src={DashboardIcon} alt="dashboard" />
								<span className="sidebar__text">Dashboard</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/create">
								<img src={AddIcon} alt="add project" />
								<span className="sidebar__text">New Project</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
