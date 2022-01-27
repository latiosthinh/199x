const BASE_URL = 'https://novus.com.vn/wp-json/199x/v1';

export async function getMembers() {
	const membersRes = await fetch(BASE_URL + '/members');
	const members = await membersRes.json();
	return members;
}

export async function getMember( slug ) {
	const members = await getMembers();
	const memberArray = members.filter(member => member.slug === slug);
	const member = memberArray.length > 0 ? memberArray[0] : null;
	return member;
}

export async function getProjects() {
	const projectRes = await fetch(BASE_URL + '/projects');
	const projects = await projectRes.json();
	return projects;
}