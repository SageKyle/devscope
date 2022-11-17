// styles & images
import { Avatar } from './Avatar';
import './OnlineUsers.css';

import { useCollection } from '../hooks/useCollection';

export const OnlineUsers = () => {
	const { error, documents: users } = useCollection('users');

	return (
		<div className="user-list">
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
	);
};
