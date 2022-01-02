import { AuthProvider } from '@/lib/auth';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import customTheme from '@/styles/theme';

/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */
function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <Global
          styles={css`
            ::selection {
              background-color: #6667ab; // very peri (2022 pantone)
              color: #fefefe;
            }
            html {
              min-width: 360px;
              scroll-behavior: smooth;
            }

            #__next {
              // body 내의 최상단 div
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
          `}
        />
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
