"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import ConnectDesktop from './desktop';
import ConnectMobile from './mobile';

export default function HomeConnect() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ConnectDesktop  />) : (
            <ConnectMobile />
        )}
        </Box>

    );
}