import Link from "next/link"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"
import UserBar from "./userbar"

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Header />
			<Navbar />
			<UserBar />
			<Footer />

			<style jsx>{`
				.sidebar {
					display: grid;
					grid-gap: 20px;
				}
			`}</style>
		</div>
	)
}

export default Sidebar