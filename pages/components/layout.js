import Head from 'next/head'
import Sidebar from './sidebar'

const Layout = ( {children} ) => {
	return (
		<>
		<Head>
			<title>199x | Codesign</title>
			<meta name="description" content="199x code & design" />
			<meta name="author" content="latiosthinh" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main>
			<Sidebar />
			{children}

			<style jsx>{`
				main{
					max-width:1124px;
					margin: 50px auto;
					display: grid;
					grid-template-columns: 1fr 3fr;
					grid-gap: 20px;
				}
			`}</style>
		</main>
		</>
	)
}

export default Layout