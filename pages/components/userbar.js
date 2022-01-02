import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/image";
import { AiFillFolder, AiFillFolderOpen, AiFillInfoCircle, AiFillRobot } from 'react-icons/ai'

const UserBar = () => {
	const router = useRouter();

	return (
		<div className="c-card">
			<Link href="/member">
				<a className={router.pathname === '/member' && "active"}>
					{ 
						router.pathname === '/member'
							? <Image
									src='/thinh-hover.jpg'
									alt='thinh.latios'
									width={65}
									height={65} />
							: <Image
									src='/thinh-sleep.jpg'
									alt='thinh.latios'
									width={65}
									height={65} />
					}
				</a>
			</Link>

			<style jsx>{`
				.c-card {
					display: flex;
					flex-wrap: wrap;
					gap: var(--spacing);
				}
				a {
					position: var(--member-link--position, relative);
					display: var(--member-link--display, block);
					border-radius: var(--member-link--border-radius, 50%);
					overflow: var(--member-link--overflow, hidden);
					width: var(--member-link--width, 65px);
					height: var(--member-link--height, 65px);
					border: 1px solid var(--member-link--border-color, transparent);
				}
				a:hover, a.active {
					--member-link--border-color: var(--black-3);
				}
			`}</style>
		</div>
	)
}

export default UserBar