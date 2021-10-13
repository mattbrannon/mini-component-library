import { ThemeProvider } from 'styled-components';
import React from 'react';
import { THEMES, SIZES } from './constants';

export const withTheme = (Component) => (props) => {
  const theme = { ...THEMES, ...SIZES };
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
};
