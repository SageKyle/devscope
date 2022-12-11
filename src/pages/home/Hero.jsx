import HeroImage from '../../assets/hero-img.svg';

export const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__txt">
				<h2 className="hero__txt--heading">
					Synergize and connect with your team on DevScope
				</h2>
				<p className="hero__txt--info details">
					Keep everything in the same place—even if your team isn’t.
				</p>
				<button className="btn btn-primary">
					<a href="/signup">Get Started For Free!</a>
				</button>
			</div>
			<img
				src={HeroImage}
				alt="delegating tasks to team members"
				className="hero__img"
			/>
		</section>
	);
};
