import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';

// styles
import './ProjectList.css';

export const ProjectList = ({ projects }) => {
	return (
		<motion.div
			className="projects"
			initial={{ x: -100 }}
			animate={{ x: 0 }}
			transition={{
				type: 'spring',
				stiffness: 190,
			}}
		>
			{projects.length === 0 && <p>No projects here yet!</p>}
			{projects.map((project) => (
				<Link to={`/projects/${project.id}`} key={project.id}>
					<h4>{project.name}</h4>
					<p>Due by {project.dueDate.toDate().toDateString()}</p>
					<div className="assigned-to">
						<ul>
							{project.assignedUsersList.map((user) => (
								<li key={user.photoURL}>
									<Avatar src={user.photoURL} />
								</li>
							))}
						</ul>
					</div>
				</Link>
			))}
		</motion.div>
	);
};
