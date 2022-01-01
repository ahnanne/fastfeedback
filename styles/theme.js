import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
};

export default theme;
