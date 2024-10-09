"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import MirButton from '../../mir-button';


export default function WelcomeMobile() {
    const theme = useTheme();
    return (
        <Box padding="20px" pt="64px" display="flex" flexDirection="column" gap="48px">
            <Box key="v1" display="flex" flexDirection="column" gap="24px" 
            >
                <Typography variant="h1">Welcome to MIR Akademien</Typography>
                <Typography variant='body1'>
                    Grounded in Inclusive Education, MIR believes in creating a world where everyone feels a sense of belonging. We strive to ensure accessibility, breaking down barriers so that everyone has the opportunity to thrive
                </Typography>
                <Typography>MIR Akademien is your reliable partner in DEI. Our commitment to equity drives everything we do, ensuring fairness and justice in every aspect of our work.</Typography>
                <MirButton variant='contained' href='/our-story'>Our story</MirButton>
            </Box>
            <Box key="v2">
                <Image src="/home/welcome/a1.png" width={616} height={640} alt="a1" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
        </Box>
    );
}