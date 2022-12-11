import HeroImage from '../../assets/hero-img.svg';

export const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__txt">
				<h2 className="hero__txt--heading">
					Synergize, delegate tasks and connect with your team with DevScope
				</h2>
				<p className="hero__txt--info">
					Keep everything in the same place—even if your team isn’t.
				</p>
				<button className="btn hero__action">
					<a href="/signup">Get Started For Free!</a>
				</button>
			</div>
			<div className="hero__img">
				<img src={HeroImage} alt="delegating tasks to team members" />
			</div>
		</section>
	);
};
