import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Navebar from './Navebar'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;



import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return<>
  <Navebar/>
  <Component {...pageProps} />
  
  </>
}
