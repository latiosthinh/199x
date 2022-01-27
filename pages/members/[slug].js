import { getMember, getMembers } from "../../utils/wordpress";

export default function MemberPage({ member }) {
	return (
		<div>
		<h2>{member.name}</h2>
		<p>{member.dob}</p>
		<p>{member.sex}</p>
		<p>{member.phone}</p>
		<p>{member.email}</p>
		<p>{member.messenger}</p>
		<p>{member.ava1}</p>
		<p>{member.ava2}</p>
		</div>
	);
}

export async function getStaticPaths() {
	const members = await getMembers();
	const paths = members.map( d => {
		return {
			params: {
				slug: d.slug
			}
		}
	});

	return {
		paths,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }) {
	const member = await getMember( params.slug );

	return {
		props: {
			member,
		},
		revalidate: 10,
	};
}