import Layout from '../comps/Layout'
import '../styles/globals.css'
import '../styles/Hex.css'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
