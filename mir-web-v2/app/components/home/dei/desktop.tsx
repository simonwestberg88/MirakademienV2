"use client"
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import MirButton from '../../mir-button';

export default function DeiDesktop() {
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
                    <MirButton variant='contained'>Contact us</MirButton>
                </Box>
                <Box key="v2"
                    sx={{ display: "flex", width: "50%", gap: "16px" }}>
                    <Box key="img1"
                        sx={{
                            width: "319.25px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                        }}>
                        <Image src="/home/dei/a1.png" width={320} height={170} alt="a1" />
                        <Image src="/home/dei/a2.png" width={320} height={340} alt="a2" />
                        <Image src="/home/dei/a3.png" width={320} height={340} alt="a3" />
                    </Box>
                    <Box key="img2"
                        sx={{
                            width: "319.25px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                        }}>
                        <Image src="/home/dei/b1.png" width={320} height={340} alt="b1" />
                        <Image src="/home/dei/b2.png" width={320} height={340} alt="b2" />
                        <Image src="/home/dei/b3.png" width={320} height={170} alt="b3" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}