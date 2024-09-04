"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import BlueButton from '../blue_button';
import Image from 'next/image';


export default function HomeDei({ text = "Contained", ...props }) {
    const theme = useTheme();
    return (
        <Box sx={{ height: "900px" }}>
            <Box key="main1" sx={{ pl: "64px", pr: "64px", display: "flex", height: "100%" }}>
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
                    <Typography variant="h1">We Foster Diversity and Inclusion</Typography>
                    <Typography variant='body1'>
                        At MIR Akademien, we believe in fostering diversity and inclusion. Our commitment to equity drives everything we do, ensuring fairness and justice in every aspect of our work.
                    </Typography>
                    <BlueButton text="Contact Us"></BlueButton>
                </Box>
                <Box key="v2"
                    sx={{ display: "flex", width: "50%", gap:"16px" }}>
                    <Box key="img1"
                        sx={{
                            width: "319.25px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                        }}>
                        <Image src="/home/dei/a1.png" alt="a1" />
                        <Image src="/home/dei/a2.png" alt="a2" />
                        <Image src="/home/dei/a3.png" alt="a3" />
                    </Box>
                    <Box key="img2"
                        sx={{
                            width: "319.25px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                        }}>
                        <Image src="/home/dei/b1.png" alt="b1" />
                        <Image src="/home/dei/b2.png" alt="b2" />
                        <Image src="/home/dei/b3.png" alt="b3" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}