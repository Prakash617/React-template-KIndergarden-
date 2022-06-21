import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavC from '../components/Navbar/NavC'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div>
       {/* <NavC /> */}
      <Component {...pageProps} />
    </div>
    ) 
    
}

export default MyApp
