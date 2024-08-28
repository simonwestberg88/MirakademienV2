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

const baseTheme = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: ['Basenji', roboto.style.fontFamily].join(','),
    h1: {
      fontSize: '2.5rem',
      lineHeight: '120%',
      fontWeight: 700,
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '2.25rem',
      lineHeight: '120%',
      fontWeight: 700,
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '3rem',
      },
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '120%',
      fontWeight: 700,
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: '140%',
      fontWeight: 700,
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '2rem',
        lineHeight: '130%',
      },
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: '140%',
      fontWeight: 700,
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: '140%',
      fontWeight: 700,
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '1rem',
      lineHeight: '150%',
    },
    body2: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '0.875rem',
      lineHeight: '150%',
    },
    subtitle1: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '1.25rem',
      lineHeight: '150%',
    },
    subtitle2: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '1.125rem',
      lineHeight: '150%',
    },
    caption: {
      fontFamily: montserrat.style.fontFamily,
      fontSize: '0.75rem',
      lineHeight: '150%',
    },
  },
  palette: {
    background: {
      default: "#EDE6D4",
    },
    primary: {
      main: "#000000",
    },
    success: {
      main: "#3FBC43",
    },
    error: {
      main: "#B42318",
    },
    text: {
      primary: "#000000",
      secondary: "#AAAAAA",
    },
    info: {
      main: "#199DEA"
    }
  },
});

export default theme;
