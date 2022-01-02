import Link from "next/link"
import { useRouter } from "next/router";
import { AiFillFolder, AiFillFolderOpen, AiFillInfoCircle, AiFillRobot } from 'react-icons/ai'
import { RiHome3Fill, RiHomeHeartFill } from 'react-icons/ri'

const Navbar = () => {
	const router = useRouter();

	return (
		<div className="c-card">
			<form>
				<input type="text" placeholder="Type something ..." />
			</form>

			<Link href="/">
				<a className={`flex aic ${router.pathname === '/' && "active"}`}>
					{ router.pathname === '/' ? <RiHomeHeartFill fontSize="20px" color="var(--orange)"/> : <RiHome3Fill fontSize="20px"/> }
					<span>Home</span>
				</a>
			</Link>
			<Link href="/projects">
				<a className={`flex aic ${router.pathname === '/projects' && "active"}`}>
					{ router.pathname === '/projects' ? <AiFillFolderOpen fontSize="20px" color="var(--orange)"/> : <AiFillFolder fontSize="20px"/> }
					<span>Projects</span>
				</a>
			</Link>
			<Link href="/about">
				<a className={`flex aic ${router.pathname === '/about' && "active"}`}>
					{ router.pathname === '/about' ? <AiFillRobot fontSize="20px" color="var(--orange)"/> : <AiFillInfoCircle fontSize="20px"/> }
					<span>About</span>
				</a>
			</Link>

			<style jsx>{`
				.c-card {
					padding-bottom: var(--spacing);
				}
				input {
					width: 100%;
					line-height: 1.17;
					height: var(--input--height, 40px);
					padding: var(--input--padding, 8px);
					background: var(--input--background, transparent);
					border: 1px solid var(--input--border, var(--black-3));
					border-radius: var(--input--border-radius, var(--radius));
					margin-bottom: var(--input--margin-bottom, calc( 3 * var(--spacing) ));
					outline: var(--input--outline, );
					color: var(--input--color, var(--white));
				}
				input:focus {
					--input--border: var(--orange);
				}
				a {
					position: var(--link--position, relative);
					gap: var(--link--gap, 8px);
					padding: var(--link--padding, var(--spacing) 0);
				}
				a.active {
					color: var(--orange);
				}
				a:hover:before {
					content: '';
					--element--z-index: 0;
					display: var(--link__psuedo--display, block);
					position: var(--link__psuedo--position, absolute);
					top: var(--link__psuedo--top, 0);
					left: var(--link__psuedo--left, -6px);
					right: var(--link__psuedo--right, -6px);
					bottom: var(--link__psuedo--bottom, 0);
					border-radius: var(--link__psuedo--border-radius, var(--radius));
					background: var(--link__psuedo--background, var(--gray-2));
				}
			`}</style>
		</div>
	)
}

export default Navbar