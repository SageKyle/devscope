import { useState } from 'react';

import { ProjectList } from '../../components/ProjectList';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

import { ProjectFilter } from './ProjectFilter';

// styles
import './Dashboard.css';

export const Dashboard = () => {
	const { documents, error } = useCollection('projects');
	const [currentFilter, setCurrrentFilter] = useState('all');
	const { user } = useAuthContext();

	// set filter
	const changeFilter = (newFilter) => {
		setCurrrentFilter(newFilter);
	};

	// filtered projects object
	// check if there are documents before filtering
	const projects = documents
		? documents.filter((project) => {
				switch (currentFilter) {
					case 'all':
						return true;

					case 'mine':
						let assignedToMe = false;
						project.assignedUsersList.map((currentUser) => {
							// check if the current user's name is in the list of assigned users
							if (user.uid === currentUser.id) {
								assignedToMe = true;
							}

							return assignedToMe;
						});
						return assignedToMe;

					case 'development':
					case 'design':
					case 'marketing':
					case 'sales':
						return project.category === currentFilter;

					default:
						return true;
				}
		  })
		: // if there are no documents, return null
		  null;

	return (
		<div className="dashboard">
			<h2 className="page-title">Dashboard</h2>
			{error && <p className="error">{error}</p>}
			{projects && (
				// component for filtering projects
				<ProjectFilter
					currentFilter={currentFilter}
					changeFilter={changeFilter}
				/>
			)}
			{/* component for displaying projects */}
			{projects && <ProjectList projects={projects} />}
		</div>
	);
};
