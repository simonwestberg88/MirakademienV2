"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import WelcomeDesktop from './welcome/desktop';
import WelcomeMobile from './welcome/mobile';


export default function HomeWelcome({ text = "Contained", ...props }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<WelcomeDesktop />) : (
            <WelcomeMobile />
        )}
        </Box>

    );
}