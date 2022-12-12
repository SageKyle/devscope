// styles/images
import './Home.css';

import { Hero } from './Hero';
import { Workspace } from './Workspaces';

export const Home = () => {
	return (
		<main className="home">
			<Hero />
			<Workspace />
		</main>
	);
};
