import WorkspaceImg from '../../assets/workspace.svg';

export const Workspace = () => {
	return (
		<section className="workspace">
			<h4 className="workspace__intro">coming soon...</h4>
			<div className="workspace__main">
				<img
					src={WorkspaceImg}
					alt="a group of people working together in the same place"
					className="workspace__img"
				/>
				<div className="workspace__txt">
					<h2 className="workspace__txt--heading">workspaces</h2>
					<p className="workspace__txt--info details">
						<strong>Create</strong> a workspace to collaborate with your team. A
						workspace makes it easier to manage and connect with your team. As
						the admin, you can add new members and also assign tasks to team
						members.
					</p>
					<p className="workspace__txt--info details">
						<strong>Join</strong> a workspace for your team to stay up-to-date
						on the important news. As a member of a workspace, you can message
						other members and also share your thoughts about a project.
					</p>
				</div>
			</div>
		</section>
	);
};
