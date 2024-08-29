"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function HomeConnect() {
    const theme = useTheme();
    return (
        <Box sx={{ pt: "112px" }}>
            <Box key="main1"
                sx={{
                    pl: "64px",
                    pr: "64px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                <Box sx={{ display: "flex", flexDirection: "column", rowGap: "16px", width: "60%" }}>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>Connect</Typography>
                    <Box>
                        <Typography variant='h2'>Get in Touch</Typography>
                        <Typography>We would love to hear from you. Contact us for any inquiries or assistance.</Typography>
                    </Box>
                    <Button variant='contained' color="info"
                        sx={{
                            fontFamily: theme.typography.body1.fontFamily,
                            textTransform: "none",
                            width: "auto",
                            alignSelf: "flex-start",
                            borderRadius: 40,
                            color: theme.palette.background.default,
                            minWidth: "120px",
                        }}>More</Button>
                </Box>
                <Box>
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
        </Box>
    );
}