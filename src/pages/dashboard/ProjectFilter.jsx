const filterList = [
	'all',
	'mine',
	'development',
	'design',
	'marketing',
	'sales',
];

export const ProjectFilter = ({ currentFilter, changeFilter }) => {
	// set new filter
	const handleClick = (filter) => {
		changeFilter(filter);
	};

	return (
		<div className="project-filter">
			<nav>
				<p>filter by </p>
				{filterList.map((filter) => (
					<button
						key={filter}
						onClick={() => handleClick(filter)}
						// add an active class to current filter
						className={currentFilter === filter ? 'active' : ''}
					>
						{filter}
					</button>
				))}
			</nav>
		</div>
	);
};
