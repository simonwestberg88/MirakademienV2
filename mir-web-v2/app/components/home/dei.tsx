"use client"
import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import DeiDesktop from './dei/desktop';
import DeiMobile from './dei/mobile';


export default function HomeDei() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>

            {isDesktop ? (<DeiDesktop />) : (
            <DeiMobile />
        )}
        </Box>

    );
}