import Link from "next/link"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<Header />
			<Navbar />
			<Footer />

			<style jsx>{`
				.sidebar {
					display: grid;
					grid-gap: 20px;
					grid-auto-rows: minmax(min-content, max-content);
					position: sticky;
					top: 50px;
					align-self: start;
				}
			`}</style>
		</aside>
	)
}

export default Sidebar