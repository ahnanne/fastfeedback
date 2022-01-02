import { AuthProvider } from '../lib/auth';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';

import '../styles/globals.css';
import customTheme from '../styles/theme';

/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
