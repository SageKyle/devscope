import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';

// styles
import './Create.css';

const categories = [
	{ value: 'development', label: 'Development' },
	{ value: 'design', label: 'Design' },
	{ value: 'writing', label: 'Writing' },
	{ value: 'marketing', label: 'Marketing' },
];

export const Create = () => {
	const { documents } = useCollection('users');
	const [users, setUsers] = useState([]);
	const { user } = useAuthContext();
	const navigate = useNavigate();
	const { addDocument, response } = useFirestore('projects');

	// form fields states
	const [name, setName] = useState('');
	const [details, setDetails] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [category, setCategory] = useState('');
	const [assignedUsers, setAssignedUsers] = useState([]);
	const [formError, setFormError] = useState(null);

	// check if we have users in the database
	useEffect(() => {
		if (documents) {
			const options = documents.map((user) => {
				return { value: user, label: user.displayName };
			});
			setUsers(options);
		}
	}, [documents]);

	//  upload project
	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormError(null);

		// make sure the project has a category
		if (!category) {
			setFormError('Please select a project category');
			return;
		}

		// make sure project has at least 1 assigned user(s)
		if (assignedUsers.length < 1) {
			setFormError('Please assign project to at least 1 user');
			return;
		}

		// project initiator info
		const createdBy = {
			displayName: user.displayName,
			photoURL: user.photoURL,
			id: user.uid,
		};

		// new object containing info of assigned users
		const assignedUsersList = assignedUsers.map((user) => {
			return {
				displayName: user.value.displayName,
				photoURL: user.value.photoURL,
				id: user.value.id,
			};
		});

		// new project object
		const project = {
			name,
			details,
			category: category.value,
			dueDate: timestamp.fromDate(new Date(dueDate)),
			comments: [],
			createdBy,
			assignedUsersList,
		};

		await addDocument(project);

		if (!response.error) {
			toast.success('Project added successfully', {
				style: {
					primary: '#8d69f1',
				},
			});
			setTimeout(() => {
				navigate('/');
			}, 3000);
		}
	};

	return (
		<div className="create-form">
			<h2 className="page-title">Create a new project</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Project Name:</span>
					<input
						type="text"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					<span>Project Details:</span>
					<textarea
						type="text"
						required
						value={details}
						onChange={(e) => setDetails(e.target.value)}
					></textarea>
				</label>
				<label>
					<span>Project Due Date:</span>
					<input
						type="date"
						required
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
					/>
				</label>
				<label>
					<span>Project category:</span>
					<Select
						onChange={(option) => setCategory(option)}
						options={categories}
					/>
				</label>
				<label>
					<span>Assign to:</span>
					<Select
						onChange={(option) => setAssignedUsers(option)}
						options={users}
						isMulti
					/>
				</label>
				<button className="btn">Add Project</button>
				{formError && <p className="error">{formError}</p>}
				<Toaster />
			</form>
		</div>
	);
};
