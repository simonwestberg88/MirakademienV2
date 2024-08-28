"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';


export default function HomeClientStories({ text = "Contained", ...props }) {
    const theme = useTheme();
    return (
        <Box sx={{ pt: "112px" }}>
            <Box key="main1" sx={{ pl: "64px", pr: "64px", display: "flex", flexDirection: "column" }}>
                <Box sx={{display: "flex", flexDirection:"column"}}>
                    <Typography variant='h2'>Client Stories</Typography>
                    <Typography>Hear from our partners and participants about their experience</Typography>
                </Box>
            </Box>
        </Box>
    );
}