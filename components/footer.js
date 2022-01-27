import { MdPrivacyTip } from 'react-icons/md'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	const router = useRouter();

	return (
		<>
			<footer className="flex aic jcsb">
				<p>&copy; {currentYear} | Codesign</p>
				<Link href="/policy">
					<a title="policy" className={router.asPath === "/policy" && "active"}>
						<MdPrivacyTip fontSize="22px" />
					</a>
				</Link>
			</footer>

			<style jsx>{`
				footer {
					--link--width: auto;
					--link__psuedo--display: none;
				}
				a:hover, a.active {
					color: var(--orange);
				}
			`}</style>
		</>
	)
}

export default Footer