// styles/images
import './Home.css';

import { Hero } from './Hero';
import { Workspace } from './Workspaces';

export const Home = () => {
	return (
		<main className="home">
			{/* <h1 className="heading">Welcome to DevScope</h1>
			<p className="paragraph">The best too to collaborate with your team.</p> */}
			<Hero />
			<Workspace />
		</main>
	);
};
