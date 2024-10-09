"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { ClientStory } from '@/app/types/ClientStory';
import ClientStoryCard from '../cards/client_story_card';

interface ClientStoriesProps {
    stories: ClientStory[];
}

export default function ClientStoriesMobile({ stories }: ClientStoriesProps) {
    const theme = useTheme();
    return (
        <Box padding="20px" pt="112px" display="flex" flexDirection="column" gap="20px">
            <Typography variant='h2'>Client Stories</Typography>
            <Typography>Hear from our partners and participants about their experience</Typography>
            <Box display="flex" flexDirection="column" gap="48px">
                {stories.map((story) => (
                    <ClientStoryCard key={story.client} story={story} />
                ))}
            </Box>
        </Box>
    );
}