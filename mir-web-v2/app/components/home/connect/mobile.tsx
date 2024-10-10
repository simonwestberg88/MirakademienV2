"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MirButton from '../../mir-button';

export default function ConnectMobile() {
    const theme = useTheme();
    return (
        <Box padding="20px" pt="112px" display="flex" flexDirection="column" gap="48px" >
            <Box display= "flex"  flexDirection= "column" gap="16px" >
                <Typography variant='body1' sx={{ fontWeight: 600 }}>Connect</Typography>
                <Box>
                    <Typography variant='h2'>Get in Touch</Typography>
                    <Typography>We would love to hear from you. Contact us for any inquiries or assistance.</Typography>
                </Box>
                <MirButton variant='contained'
                    sx={{ width: "160px" }}
                >Contact us</MirButton>
            </Box>
            <Box display="flex" flexDirection="column" gap="24px">
                <Box key="email" sx={{ display: "flex", gap: 2 }}>
                    <MailOutlineIcon />
                    <Box>
                        <Typography variant='h6'>Email</Typography>
                        <Typography variant='caption'>info@mirakademien.com</Typography>
                    </Box>
                </Box>
                <Box key="phone" sx={{ display: "flex", gap: 2 }}>
                    <PhoneIcon />
                    <Box>
                        <Typography variant='h6'>Phone</Typography>
                        <Typography variant='caption'>+46-55-222-8585</Typography>
                    </Box>
                </Box>

                <Box key="office" sx={{ display: "flex", gap: 2 }}>
                    <LocationOnIcon />
                    <Box>
                        <Typography variant='h6'>Office</Typography>
                        <Typography variant='caption'>Uppsala, Sweden</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}