// Styles and images
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import './Navbar.css';

export const Navbar = () => {
	const { logout, isPending } = useLogout();
	const { user } = useAuthContext();

	return (
		<div className="navbar">
			<ul>
				<li className="logo">
					<img src={Logo} alt="devscope synergy logo" />
					<span>DevScope Synergy</span>
				</li>
				{!user && (
					<>
						<li>
							<Link to={'/login'}>Login</Link>
						</li>

						<li>
							<Link to={'/signup'}>signup</Link>
						</li>
					</>
				)}
				{user && (
					<li>
						{isPending && (
							<button className="btn" disabled>
								Logging out
							</button>
						)}
						{!isPending && (
							<button className="btn" onClick={logout}>
								Logout
							</button>
						)}
					</li>
				)}
			</ul>
		</div>
	);
};
