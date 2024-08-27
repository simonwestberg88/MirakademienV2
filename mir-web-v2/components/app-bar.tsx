'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BlueButton from './blue_button';
import { useTheme } from '@mui/material/styles';

export default function ButtonAppBar() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 83, backgroundColor: theme.palette.background.default }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <img src="/mir_logo.svg" width={121.85} height={61.25} alt="MIR Logo" />
          </Box>
          <BlueButton text="Learn More"></BlueButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
