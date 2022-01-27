import Link from "next/link"
import { useRouter } from "next/router";
import { AiFillFolder, AiFillFolderOpen, AiFillInfoCircle, AiFillRobot } from 'react-icons/ai'
import { RiHome3Fill, RiHomeHeartFill } from 'react-icons/ri'

const Navbar = () => {
	const router = useRouter();

	return (
		<div className="c-card">
			<Link href="/">
				<a className={`flex aic ${router.asPath === '/' && "active"}`}>
					{ router.asPath === '/' ? <RiHomeHeartFill fontSize="var(--icon-size)" color="var(--orange)"/> : <RiHome3Fill fontSize="var(--icon-size)"/> }
					<span>Home</span>
				</a>
			</Link>

			<Link href="/about">
				<a className={`flex aic ${router.asPath === '/about' && "active"}`}>
					{ router.asPath === '/about' ? <AiFillRobot fontSize="var(--icon-size)" color="var(--orange)"/> : <AiFillInfoCircle fontSize="var(--icon-size)"/> }
					<span>About</span>
				</a>
			</Link>

			<Link href="/projects">
				<a className={`flex aic ${router.asPath === '/projects' && "active"}`}>
					{ router.asPath === '/projects' ? <AiFillFolderOpen fontSize="var(--icon-size)" color="var(--orange)"/> : <AiFillFolder fontSize="var(--icon-size)"/> }
					<span>Projects</span>
				</a>
			</Link>

			<style jsx>{`
				input {
					width: 100%;
					line-height: 1.17;
					height: var(--input--height, 40px);
					padding: var(--input--padding, 8px);
					background: var(--input--background, transparent);
					border: 1px solid var(--input--border, var(--black-3));
					border-radius: var(--input--border-radius, var(--radius));
					margin-top: var(--input--margin-top, var(--spacing));
					outline: var(--input--outline, );
					color: var(--input--color, var(--white));
				}
				input:focus {
					--input--border: var(--orange);
				}
				a.active {
					color: var(--orange);
				}
			`}</style>
		</div>
	)
}

export default Navbar