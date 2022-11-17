import { motion } from 'framer-motion';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { useSignup } from '../../hooks/useSignup';

// styles
import './Signup.css';

export const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [thumbnail, setThumbnail] = useState(null);
	const [thumbnailError, setThumbnailError] = useState(null);
	const { signup, isPending, error } = useSignup();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		toast.promise(
			// signup the user
			await signup(email, password, displayName, thumbnail),
			{
				loading: 'Creating your account',
				success: 'Account created successfully! Welcome',
				error: 'Unable to create your account at the moment',
			},
			{
				style: {
					minWidth: '250px',
				},
			}
		);
		setTimeout(() => {
			navigate('/');
		}, 3000);
	};

	const handleFileChange = (e) => {
		setThumbnail(null);
		let selected = e.target.files[0];

		// make the input field required
		if (!selected) {
			setThumbnailError('Please select a file');
			return;
		}
		// make sure the file is an image
		if (!selected.type.includes('image')) {
			setThumbnailError('Selected file must be an image');
			return;
		}

		// set a max size for the file
		if (selected.size > 300000) {
			setThumbnailError('Image file size must be less than 300kb');
			return;
		}

		setThumbnailError(null);
		setThumbnail(selected);
	};

	return (
		<motion.form
			className="auth-form"
			onSubmit={handleSubmit}
			initial={{ x: 100 }}
			animate={{ x: 0 }}
			transition={{
				type: 'spring',
				stiffness: 190,
			}}
		>
			<h2>Sign up</h2>
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
				<span>Display Name:</span>
				<input
					type="text"
					required
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
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
			<label>
				<span>Profile Image:</span>
				<input type="file" required onChange={handleFileChange} />
				{thumbnailError && <div className="error">{thumbnailError}</div>}
			</label>
			{!isPending && <button className="btn">Sign Up</button>}
			{isPending && (
				<button className="btn" disabled>
					Loading
				</button>
			)}
			{error && <div className="error">{error}</div>}
			<p className="login-option">
				already have an account? <Link to="/login">Login</Link>
			</p>
			<Toaster />
		</motion.form>
	);
};
