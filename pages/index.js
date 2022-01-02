import Image from 'next/image'

const Home = () => {
	return (
		<div>
			<h2 className="h1">
				We create <br/>
				stunning designs & <br/>
				innovative digital solutions
			</h2>
			<div className="c-card">

			</div>

			<style jsx>{`
				.h1 {
					font-size: 1.9em;
					margin-bottom: 19px;
					background: -webkit-linear-gradient(var(--gray), var(--orange));
								-webkit-background-clip: text;
								-webkit-text-fill-color: transparent;
				}
			`}</style>
		</div>
	)
}

export default Home