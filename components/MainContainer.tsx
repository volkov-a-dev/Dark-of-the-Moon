import Head from 'next/head'
import Navbar from './Navbar'

interface MainContainerProps {
  children: JSX.Element
  keywords?: string
}

const MainContainer = ({ children, keywords = '' }: MainContainerProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="keywords"
          content={'relocation, work aboard, find clients' + keywords}
        />
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default MainContainer
