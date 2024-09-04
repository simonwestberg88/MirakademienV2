'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import BlueButton from './blue_button';
import Image from 'next/image';

export default function ButtonAppBar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (isDesktop) {
    return (
      <AppBar position="static" sx={{ height: 83, backgroundColor: theme.palette.background.default, boxShadow: "none" }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/mir_logo.png" width={121.85} height={61.25} alt="MIR Logo" />
          </Box>
          <Box
            sx={{
              ml: 5,
              display: 'flex',
              flexGrow: 1, // Make this Box take up remaining space
              gap: 2,
              alignItems: 'center',
              '& > *': {
                fontSize: theme.typography.body1.fontSize,
                textAlign: 'left',
              },
            }}
          >
            <MenuItem sx={{color: "black"}} component="a" href="/our-story">Our Story</MenuItem>
            <MenuItem sx={{color: "black"}}component="a" href="/services">Services</MenuItem>
            <MenuItem sx={{color: "black"}} component="a" href="/projects">Projects</MenuItem>
            <MenuItem sx={{color: "black"}} component="a" href="/news">News</MenuItem>
            <MenuItem sx={{color: "black"}} component="a" href="/blog">Blog</MenuItem>
            <MenuItem sx={{color: "black"}} component="a" href="/reports">Reports</MenuItem>
            <MenuItem sx={{color: "black"}} component="a" href="/contacts">Contacts</MenuItem>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BlueButton text="Contact Us" />
          </Box>
        </Toolbar>
      </AppBar>
    )
  }
  // mobile portion
  return (
    <Box sx={{ flexGrow: 1 }}>
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
            margin: 0, // Remove any margin
            padding: 0, // Remove any padding
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Align items to the top
            alignItems: 'flex-start', // Align items to the left
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
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', padding: theme.spacing(2) }}>
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
          <Image src="/mir_logo.png" width={121.85} height={61.25} alt="MIR Logo" />
        </Box>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Our Story</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Services</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Projects</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>News</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Blog</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Reports</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Contacts</MenuItem>
      </Menu>
    </Box>
  );
}
