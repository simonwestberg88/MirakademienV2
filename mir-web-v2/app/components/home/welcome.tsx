"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import BlueButtonOutlined from '../blue_button_outlined';
import Image from 'next/image';


export default function HomeWelcome({ text = "Contained", ...props }) {
    const theme = useTheme();
    return (
        <Box sx={{ height: "864px", pt: "112px" }}>
            <Box key="main1" sx={{ pl: "64px", pr: "64px", display: "flex", height: "100%", alignItems: "center" }}>
                <Box key="v1"
                    sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        pr: "80px",
                        alignItems: "flex-start",  // Align items to the left
                        justifyContent: "center",   // Center items vertically within the parent
                    }}>
                    <Typography variant="h1">Welcome to MIR Akademien</Typography>
                    <Typography variant='body1'>
                        Grounded in Inclusive Education, MIR believes in creating a world where everyone feels a sense of belonging. We strive to ensure accessibility, breaking down barriers so that everyone has the opportunity to thrive
                    </Typography>
                    <Typography>MIR Akademien is your reliable partner in DEI. Our commitment to equity drives everything we do, ensuring fairness and justice in every aspect of our work.</Typography>
                    <BlueButtonOutlined variant='contained' text="Our story >"></BlueButtonOutlined>
                </Box>
                <Box key="v2"
                    sx={{ display: "flex", width: "100%", gap: "16px" }}>
                    <Image src="/home/welcome/a1.png" alt="a1" style={{ marginLeft: "auto", width: 616, height: 640 }}/>
                </Box>
            </Box>
        </Box>
    );
}