import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Error = () => {
	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ rotate: 360, scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 200,
				damping: 20,
			}}
		>
			<h1>404.</h1>
			<p>Oops! Seems you got the wrong address</p>
			<Link to={'/'}>Go back home</Link>
		</motion.div>
	);
};
