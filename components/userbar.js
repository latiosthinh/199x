import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getMembers } from "../utils/wordpress";
import { IoMdContacts } from 'react-icons/io'

const UserBar = () => {
	const router = useRouter();

	const [members, setMembers] = useState( [] )
	useEffect( () => {
		const membersRes = getMembers().then( data => setMembers(data) )
	}, [] )

	return (
		<div>
			<p className="flex aic">
				<IoMdContacts fontSize="var(--icon-size)" />
				<span>Members</span>
			</p>

			<div className="c-card">
				{
					Object.values(members).map( m =>
						<Link key={`${m.slug}-${m.key}`} href={`/members/` + m.slug}>
							<a>
								<div className="member-image">
									{
										router.asPath === `/members/` + m.slug
										? <div className="image__wrapper">
											<Image
												src={m.ava2}
												alt={m.slug}
												title={m.name}
												width={45}
												height={45} />
											<span className="member-active"></span>
										</div>
										: <div className="image__wrapper">
											<Image
												src={m.ava1}
												alt={m.slug}
												title={m.name}
												width={45}
												height={45} />
										</div>
									}
								</div>
								<span>{m.shortname}</span>
							</a>
						</Link>
					)
				}
			</div>
			<style jsx>{`
				p {
					gap: 8px;
					margin-bottom: 20px;
				}
				.c-card {
					display: flex;
					flex-wrap: wrap;
					gap: var(--spacing);
				}
				a {
					--link--padding: 4px 0;
				}
				.member-image {
					position: relative;
				}
				.image__wrapper {
					width: var(--member-ava--width, 45px);
					height: var(--member-ava--height, 45px);
					border: 1px solid var(--member-ava--border-color, var(--gray-2));
					border-radius: 50%  !important;
					overflow: hidden;
				}
				.member-active {
					display: block;
					position: absolute;
					width: 6px;
					height: 6px;
					bottom: 3px;
					right: 6px;
					background: var(--orange);
					border-radius: 50%;
				}
			`}</style>
		</div>
	)
}

export default UserBar