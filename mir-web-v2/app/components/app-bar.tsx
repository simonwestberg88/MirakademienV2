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
import Image from 'next/image';
import { Link, Typography } from '@mui/material';
import { useState } from 'react';
import MirButton from './mir-button';
import ContactForm from './contact-form';

export default function ButtonAppBar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <AppBar position="static" sx={{ height: 83, backgroundColor: theme.palette.background.default, boxShadow: "none" }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href={"/"}> <Image src="/mir_logo.png" width={121.85} height={61.25} alt="MIR Logo" /></Link>
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
            <MenuItem sx={{ color: "black" }} component="a" href="/our-story">Our Story</MenuItem>
            <MenuItem sx={{ color: "black" }} component="a" href="/services">Services</MenuItem>
            <MenuItem sx={{ color: "black" }} component="a" href="/projects">Projects</MenuItem>
            <MenuItem sx={{ color: "black" }} component="a" href="/news">News</MenuItem>
            <MenuItem sx={{ color: "black" }} component="a" href="/blog">Blog</MenuItem>
            <MenuItem sx={{ color: "black" }} component="a" href="/reports">Reports</MenuItem>
            <MenuItem sx={{ color: "black" }} component="a" href="/contacts">Contacts</MenuItem>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MirButton variant='contained' onClick={handleClickOpen}>Contact us</MirButton>
          </Box>
        </Toolbar>
        <ContactForm open={open} handleClose={handleClose} />
      </AppBar>
    )
  }
  return (
    <Box width="100%" display="flex" flexDirection="column" bgcolor={theme.palette.background.default} pt="4px" pb="4px">
      <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)} // This will trigger the menu to open
          >
            <MenuIcon />
          </IconButton>
          <Image src="/mir_logo.png" width={121.85} height={61.25} alt="MIR Logo" />
        </Box>
        <MirButton sx={{height: "32px"}} variant="contained">Learn More</MirButton>
      </Box>
      {open ? (
        <Box display="flex" flexDirection="column" gap="24px" pl= "20px" pr="20px" height="100vh" pt="32px" width="100%">
          <Link href="/our-story" underline='none'><Typography>Our Story</Typography></Link>
          <Link href="/services" underline='none'><Typography>Services</Typography></Link>
          <Link href="/projects" underline='none'><Typography>Projects</Typography></Link>
          <Link href="/news" underline='none'><Typography>News</Typography></Link>
          <Link href="/blog" underline='none'><Typography>Blog</Typography></Link>
          <Link href="/reports" underline='none'><Typography>Reports</Typography></Link>
          <Link href="/contacts" underline='none'><Typography>Contacts</Typography></Link>
        </Box>
      ) : (
        <></>
      )}
    </Box>

  );
  // <Menu
  //   anchorEl={anchorEl}
  //   open={Boolean(anchorEl)}
  //   onClose={handleMenuClose}
  //   anchorOrigin={{
  //     vertical: 'top',
  //     horizontal: 'left',
  //   }}
  //   transformOrigin={{
  //     vertical: 'top',
  //     horizontal: 'left',
  //   }}
  // >
  //   <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', padding: theme.spacing(2) }}>
  //     <IconButton
  //       size="large"
  //       edge="start"
  //       color="inherit"
  //       aria-label="menu"
  //       sx={{ color: "black", marginRight: theme.spacing(2) }}
  //       onClick={handleMenuClose} // Optionally, close the menu when clicking the icon again
  //     >
  //       <MenuIcon />
  //     </IconButton>
  //     <Image src="/mir_logo.png" width={121.85} height={61.25} alt="MIR Logo" />
  //   </Box>
  //   <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Our Story</MenuItem>
  //   <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Services</MenuItem>
  //   <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Projects</MenuItem>
  //   <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>News</MenuItem>
  //   <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Blog</MenuItem>
  //   <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Reports</MenuItem>
  //   <MenuItem onClick={handleMenuClose} sx={{ fontSize: '24px', width: '100%' }}>Contacts</MenuItem>
  // </Menu>
}
