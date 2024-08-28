"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import BlueButton from '../blue_button';
import BlueButtonOutlined from '../blue_button_outlined';


export default function HomeTeam({ text = "Contained", ...props }) {
    const theme = useTheme();
    return (
        <Box sx={{ height: "1543px", pt: "112px" }}>
            <Box key="main1" sx={{ pl: "64px", pr: "64px", display: "flex", flexDirection: "column", height: "100%", alignItems: "center" }}>
                <Box sx={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                    <Typography variant='h2'>Meet Our Team</Typography>
                    <Typography>Get to know the talented individuals behind MIR Akademien.</Typography>
                </Box>
            </Box>
        </Box>
    );
}