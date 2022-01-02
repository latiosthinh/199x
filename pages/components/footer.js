import Link from "next/link"

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer>
			&copy; Copyrights {currentYear} <br />
		</footer>
	)
}

export default Footer