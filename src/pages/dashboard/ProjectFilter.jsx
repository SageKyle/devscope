import Select from 'react-select';

// for desktop layout
const filterList = [
	'all',
	'mine',
	'development',
	'design',
	'marketing',
	'writing',
];

// for mobile layout (with react-select)
const filterObject = [
	{ value: 'all', label: 'All' },
	{ value: 'mine', label: 'Mine' },
	{ value: 'development', label: 'Development' },
	{ value: 'design', label: 'Design' },
	{ value: 'writing', label: 'Writing' },
	{ value: 'marketing', label: 'Marketing' },
];

export const ProjectFilter = ({ currentFilter, changeFilter }) => {
	// set new filter
	const handleClick = (filter) => {
		changeFilter(filter);
	};

	return (
		<div className="project-filter">
			<nav>
				<p>Filter by: </p>
				{/* filter option for desktop layout */}
				<div className="desktop-filter">
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
				</div>
				{/* filter option for mobile layout */}
				<div className="mobile-filter">
					<Select
						// set default value to all
						defaultValue={filterObject[0]}
						value={filterObject.value}
						options={filterObject}
						onChange={(filter) => handleClick(filter.value)}
					/>
				</div>
			</nav>
		</div>
	);
};
