"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { ClientStory } from '@/app/types/ClientStory';
import ClientStoriesDesktop from './desktop';
import ClientStoriesMobile from './mobile';

interface ClientStoriesProps {
    stories: ClientStory[];
}

export default function ClientStories({ stories }: ClientStoriesProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ClientStoriesDesktop stories={stories} />) : (
            <ClientStoriesMobile stories={stories} />
        )}
        </Box>

    );
}