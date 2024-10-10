'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import FooterDesktop from './desktop';
import FooterMobile from './mobile';

export default function Footer() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>

            {isDesktop ? (<FooterDesktop />) : (
            <FooterMobile />
        )}
        </Box>

    );
}
