import '../styles/globals.css';
import {ThirdwebWeb3Provider} from '@3rdweb/hooks';
// import "react-loader-spinner/dist/loader/css/react-loader.css";
// import Loader from 'react-loader-spinner';

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
   <ThirdwebWeb3Provider
   supportedChainIds={supportedChainIds}
   connectors={connectors} 
  >
    <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default MyApp
