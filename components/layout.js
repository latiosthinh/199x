import Head from 'next/head'
import Sidebar from './sidebar'
import UserBar from './userbar'

const Layout = ( {children} ) => {
	return (
		<>
		<Head>
			<title>19xx | Codesign</title>
			<meta name="description" content="19xx code & design" />
			<meta name="author" content="latiosthinh" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main>
			<Sidebar />
			{children}
			<UserBar />

			<style jsx>{`
				main{
					max-width:1124px;
					margin: 50px auto;
					display: grid;
					grid-template-columns: 2fr 5fr 2fr;
					grid-auto-rows: minmax(min-content, max-content);
					grid-gap: 20px;
					position: relative;
				}
			`}</style>
		</main>
		</>
	)
}

export default Layout