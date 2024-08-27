'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BlueButton from './blue_button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';

export default function ButtonAppBar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
              sx={{ color: "black" }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <img src="/mir_logo.svg" width={121.85} height={61.25} alt="MIR Logo" />
          </Box>
          <BlueButton text="Learn More" />
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(2),
          },
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing(4) }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: "black", marginRight: theme.spacing(2) }}
            onClick={handleMenuClose} // Optionally, close the menu when clicking the icon again
          >
            <MenuIcon />
          </IconButton>
          <img src="/mir_logo.svg" width={121.85} height={61.25} alt="MIR Logo" />
        </Box>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px' }}>Our Story</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px' }}>Services</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px' }}>Projects</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px' }}>News</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px' }}>Blog</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px' }}>Reports</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px' }}>Contacts</MenuItem>
      </Menu>
    </Box>
  );
}
