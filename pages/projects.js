import Image from 'next/image'
import { useState } from 'react'
import { getProjects } from '../utils/wordpress'

export default function Projects({ projects }) {
	const [items, setItems] = useState([])

	console.log(projects)
	return (
		<div>
			<h2 className="h1">
				Ours <br/>
				best projects <br/>
				& beautiful clients
			</h2>

			<input type="text" placeholder="type some keyword..." />

			<div className="projects">

			</div>

			<style jsx>{`
				.h1 {
					--heading--gradient: -webkit-linear-gradient(var(--brown), var(--blue));
				}
				input {
					width: 100%;
					padding: var(--spacing);
					border-radius: var(--radius);
					border: 1px solid var(--input--border-color, transparent);
					background: var(--gray-2);
					color: var(--white);
					margin-bottom: 20px;
				}
				input:focus {
					outline: none;
					--input--border-color: var(--orange);
				}
			`}</style>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const projects = await getProjects();

	return {
		props: {
			projects,
		}
	};
}