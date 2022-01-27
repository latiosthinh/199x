import Image from 'next/image'

const Policy = () => {
	return (
		<div>
			<div className="c-card">
				<h2 className="h1">
				We provide standardized web/app development. <br/>
				Focus on your business and leave the technical to us.
				</h2>
			</div>

			<div className="c-card">
				<h2 className="c-orange">Standard Development</h2>
				<br/><br/>
				<h3>Phase 1:</h3>
				<ol>
					<li>The client and us discuss about the Requirements, Content of the Projects.</li>
					<li>We give out the design and solution idea.</li>
					<li>The client give out some feedbacks or desires about the idea.</li>
					<li>Signing contract.</li>
				</ol>

				<br/>

				<h3>Phase 2:</h3>
				<ol>
					<li>The client will pay 50% forward.</li>
					<li>We start design the System and the Layout at the same time.</li>
					<li>We demo project's design to the client.</li>
					<li>Client will give out maximum 3 times of total feedback.</li>
					<li>We start coding after the design is approved.</li>
				</ol>

				<br/>

				<h3>Phase 3:</h3>
				<ol>
					<li>We deliver + demo the project.</li>
					<li>The client check all the functions and also the stunning looks of the project.</li>
					<li>We take payment (50% left) from client and we close the Contract.</li>
				</ol>
			</div>

			<div className="c-card">
				<h2 className="c-orange">Support Policy</h2>
				<br/><br/>

				<h3>We do not:</h3>
				<ul>
					<li>Create content nor upload full content for you.</li>
					<li>Translate whole web / app for you.</li>
					<li>Fix nor adjust your images.</li>
					<li>Help you change layout nor functions those are not discussed or feedbacked in development phase.</li>
					<li className="c-orange">Take your money and run away.</li>
				</ul>

				<br/>

				<h3>But we do:</h3>
				<ul>
					<li>Provide design, development and deployment.</li>
					<li>Provide language translating function.</li>
					<li>Support upload demo content.</li>
					<li>Guide / show you how to control your web/app through admin panel.</li>
					<li>Migrate content if possible.</li>
					<li>Fix CSS layout.</li>
					<li>Fix bug and take responsibility to all our faults.</li>
					<li className="c-orange">Cherish our belove clients.</li>
				</ul>
			</div>

			<style jsx>{`
				.h1 {
					--title--margin-bottom: 0;
					--heading--gradient: -webkit-linear-gradient(var(--purple), var(--brown));
				}
				.c-card {
					--card--margin: 0 0 20px 0;
				}
			`}</style>
		</div>
	)
}

export default Policy