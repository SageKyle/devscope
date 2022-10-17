import { ProjectList } from '../../components/ProjectList';
import { useCollection } from '../../hooks/useCollection';

// sstyles
import './Dashboard.css';

export const Dashboard = () => {
  const { documents: projects, error } = useCollection('projects');

  return (
    <div className="dashboard">
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
};
