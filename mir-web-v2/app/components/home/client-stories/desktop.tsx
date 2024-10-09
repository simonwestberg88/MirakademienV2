"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { ClientStory } from '@/app/types/ClientStory';
import ClientStoryCard from '../cards/client_story_card';

interface ClientStoriesProps {
    stories: ClientStory[];
}

export default function ClientStoriesDesktop({ stories }: ClientStoriesProps) {
    const theme = useTheme();
    return (
        <Box sx={{ pt: "112px" }}>
            <Box key="main1" sx={{ pl: "64px", pr: "64px", display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant='h2'>Client Stories</Typography>
                    <Typography>Hear from our partners and participants about their experience</Typography>
                </Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", rowGap: "96px", justifyContent: "center", pt: "96px" }}>
                    {stories.map((story) => (
                        <ClientStoryCard key={story.client} story={story} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}