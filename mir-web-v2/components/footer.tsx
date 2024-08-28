'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    const theme = useTheme();
    return (
        <Box key="l1" sx={{ height: 545, width: "100%", backgroundColor: theme.palette.background.default }}>
            <Box key="l2_1" sx={{ paddingTop: "80px", pl: "64px", pr: "64px", display: "flex", justifyContent: "space-between", alignItems: "top" }}>
                <Box key="l3_1" sx={{ width: "684px", display: "flex", justifyContent: 'space-between' }}>
                    <img src="/mir_logo.svg" width={121.85} height={61.25} alt="MIR Logo" />
                    <Box key="l4_1">
                        <Typography sx={{ fontWeight: "bold" }}>About Us</Typography>
                        <Box sx={{ pt: "10px" }}>
                            <Typography>Our Story</Typography>
                            <Typography>Services</Typography>
                            <Typography>Projects</Typography>
                            <Typography>Contacts</Typography>
                        </Box>
                    </Box>
                    <Box key="l4_2">
                        <Typography sx={{ fontWeight: "bold" }}>Resources</Typography>
                        <Box sx={{ pt: "10px" }}>
                            <Typography>News</Typography>
                            <Typography>Blog</Typography>
                            <Typography>Reports</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box key="l3_2" sx={{ width: 500, marginBottom: 2 }}>
                    <Box>
                        <Typography sx={{ fontWeight: "bold" }}>Subscribe</Typography>
                        <Box sx={{ pt: "10px" }}></Box>
                        <Typography>Join our newsletter to stay up to date on features and releases.</Typography>
                        <Box sx={{ display: "flex" }}><TextField></TextField><Button>Subscribe</Button>
                        </Box>
                        <Typography variant="caption">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box key="l2_2" sx={{ pl: "64px", pr: "64px", display: "flex" }}>
                <Divider sx={{ borderColor: theme.palette.text.primary }} />
                <Box sx={{ display: "flex", gap: 4 }}>
                    <Typography variant='caption'>© 2023 Mir Akademien. All rights reserved.</Typography>
                    <Typography variant='caption' sx={{textDecoration: "underline"}}>Privacy Policy</Typography>
                    <Typography variant="caption" sx={{textDecoration: "underline"}}>Terms of Service</Typography>
                </Box>
                <Box sx={{ml: "auto", display:"flex", gap: 2}}>
                    <InstagramIcon />
                    <LinkedInIcon />
                </Box>
            </Box>
        </Box>
    );
}
