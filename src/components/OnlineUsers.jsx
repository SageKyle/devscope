import { useRef } from 'react';

// styles & images
import CloseIcon from '../assets/close_icon.svg';
import Users from '../assets/user_dashboard.svg';
import { Avatar } from './Avatar';
import './OnlineUsers.css';

import { useCollection } from '../hooks/useCollection';

export const OnlineUsers = () => {
	const { error, documents: users } = useCollection('users');
	// ref for the online users' list
	const usersRef = useRef();
	// ref to toggle on the list
	const toggleRef = useRef();

	const handleRef = () => {
		// because the users' menu is hidden initially, by toggling both of them at once, they will not show the same time
		usersRef.current.classList.toggle('hidden');
		toggleRef.current.classList.toggle('hidden');
	};

	return (
		<>
			{/* icon to display users' list */}
			<div
				className="logo menu-btn users-btn"
				onClick={handleRef}
				ref={toggleRef}
			>
				<img src={Users} alt="toggle list of users" />
			</div>
			<div className="user-list hidden" ref={usersRef}>
				{/* icon to close the users' list */}
				<div className="hide-users" onClick={handleRef}>
					<img src={CloseIcon} alt="hide list of users" />
				</div>
				<h2>All Users</h2>
				{error && <div className="error">{error}</div>}
				{users &&
					users.map((user) => (
						<div key={user.id} className="user-list-item">
							{user.online && <span className="online-user"></span>}
							<span>{user.displayName}</span>
							<Avatar src={user.photoURL} alt="profile image" />
						</div>
					))}
			</div>
		</>
	);
};
