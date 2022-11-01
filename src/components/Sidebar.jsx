import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

// styles and images
import AddIcon from '../assets/add_icon.svg';
import CloseIcon from '../assets/close_icon.svg';
import Menu from '../assets/menu_button.svg';
import { Avatar } from './Avatar';
import './Sidebar.css';

import DashboardIcon from '../assets/dashboard_icon.svg';
import { useAuthContext } from '../hooks/useAuthContext';

export const Sidebar = () => {
	const { user } = useAuthContext();
	const SidebarRef = useRef();
	// ref to toggle the sidebar
	const menuRef = useRef();

	const handleRef = () => {
		// because the open icon already has a hidden class, by toggling both of them at once, they will not show the same time
		SidebarRef.current.classList.toggle('hidden');
		menuRef.current.classList.toggle('hidden');
	};

	return (
		<>
			{/* icon to display users' list */}
			<div className="logo menu-btn hidden" ref={menuRef} onClick={handleRef}>
				<img src={Menu} alt="menu" />
			</div>
			<div className="sidebar" ref={SidebarRef}>
				{/* icon to close the users' list */}
				<div className="close-btn" onClick={handleRef}>
					<img src={CloseIcon} className="logo" alt="close" />
				</div>
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
		</>
	);
};
