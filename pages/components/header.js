import Link from "next/link"

const Header = () => {
	return (
		<header className="c-card">
			<Link href="/">
				<a><h1>199x</h1></a>
			</Link>

			<p>Codesign</p>

			<style jsx>{`
				h1 {
					font-size: 2em;
					font-weight: 600;
				}
			`}</style>
		</header>
	)
}

export default Header
