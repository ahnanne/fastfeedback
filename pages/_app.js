import { ProvideAuth } from '../lib/auth';

import '../styles/globals.css';
/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */
function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;
