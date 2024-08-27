'use client';
import { Roboto, Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: ['Basenji', roboto.style.fontFamily].join(','),
    h1: {
      fontSize: '2.5rem',
      lineHeight: '120%',
      fontWeight: 700, // Adjust font weight if needed
    },
    h2: {
      fontSize: '2.25rem',
      lineHeight: '120%',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '120%',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: '140%',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: '140%',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: '140%',
      fontWeight: 700,
    },
    body1: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '1rem', // Regular text
      lineHeight: '150%',
    },
    body2: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '0.875rem', // Small text
      lineHeight: '150%',
    },
    subtitle1: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '1.25rem', // Large text
      lineHeight: '150%',
    },
    subtitle2: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '1.125rem', // Medium text
      lineHeight: '150%',
    },
    caption: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '0.75rem', // Tiny text
      lineHeight: '150%',
    },
  },
  palette: {
    background: {
      default: "#EDE6D4"
    },
    primary: {
      main: "#000000"
    },
    success:{
      main: "#3FBC43"
    },
    error:{
      main: "#B42318"
    },
    text: {
      primary: "#000000",
      secondary: "#AAAAAA",
    }
  }
});

export default theme;
