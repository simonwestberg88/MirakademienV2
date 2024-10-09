"use client"
import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { News } from '@/app/types/news';
import NewsDesktop from './desktop';
import NewsMobile from './mobile';

interface HomeNewsProps {
    news: News[];
}

export default function HomeNews({ news }: HomeNewsProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<NewsDesktop news={news} />) : (
            <NewsMobile news={news} />
        )}
        </Box>

    );
}