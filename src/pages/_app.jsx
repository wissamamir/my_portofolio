import Layouts from '@/Layouts';
import '../styles/style.scss';

export default function App({ Component, pageProps }) {
  return(
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}
