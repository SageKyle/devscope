import { useNavigate } from 'react-router-dom';

import { Avatar } from '../../components/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';

export const ProjectSummary = ({ project }) => {
	const navigate = useNavigate();
	const { deleteDocument } = useFirestore('projects');
	const { user } = useAuthContext();

	const handleDelete = async (e) => {
		await deleteDocument(project.id);

		setTimeout(() => {
			// TODO add a notification here
			console.log('project deleted');
			navigate('/');
		}, 500);
	};

	return (
		<div>
			<div className="project-summary">
				<h2 className="page-title">{project.name}</h2>
				<p className="created-by">by {project.createdBy.displayName}</p>
				<p className="due-date">
					Project due by {project.dueDate.toDate().toDateString()}
				</p>
				<p className="details">{project.details}</p>
				<h4>Project is assigned to:</h4>
				<div className="assigned-users">
					{project.assignedUsersList.map((user) => (
						<div key={user.id} className="assigned-user">
							<Avatar src={user.photoURL} />
						</div>
					))}
				</div>
			</div>
			{user.uid === project.createdBy.id && (
				<button className="btn" onClick={handleDelete}>
					Delete Project
				</button>
			)}
		</div>
	);
};
