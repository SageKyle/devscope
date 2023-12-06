// Styles and images
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import './Navbar.css'

export const Navbar = () => {
	const { logout, isPending } = useLogout()
	const { user } = useAuthContext()

	return (
		<div className="navbar">
			<ul>
				<li className="logo__container" title="back to home">
					<Link to={'/dashboard'} className="logo">
						<img src={Logo} alt="devscope" />
						<span>
							DevScope<span className="title-desc"> Synergy</span>
						</span>
					</Link>
				</li>
				{!user && (
					<>
						<li>
							<Link to={'/login'} className="navbar__link">
								Login
							</Link>
						</li>

						<li>
							<Link to={'/signup'} className="navbar__link">
								signup
							</Link>
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
	)
}
