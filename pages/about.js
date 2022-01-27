import Image from 'next/image'

const About = () => {
	return (
		<div>
			<h2 className="h1">
				Empathy and change <br/>
				create new sweeping <br/>
				experiences
			</h2>

			<div className="c-card"></div>

			<style jsx>{`
				.h1 {
					--heading--gradient: -webkit-linear-gradient(var(--purple), var(--brown));
				}
			`}</style>
		</div>
	)
}

export default About