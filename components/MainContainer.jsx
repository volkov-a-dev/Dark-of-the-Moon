import Head from 'next/head'
import Navbar from './NavBar'

const MainContainer = ({ children, keywords = '' }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta keywords={'relocation, work aboard, find clients' + keywords} />
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default MainContainer
