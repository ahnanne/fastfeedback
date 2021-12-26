import { AuthProvider } from '../lib/auth';

import '../styles/globals.css';
/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
