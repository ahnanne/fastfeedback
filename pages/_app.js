import { AuthProvider } from '../lib/auth';
import { ThemeProvider } from '@emotion/react';

import '../styles/globals.css';
import theme from '../styles/theme';

/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
