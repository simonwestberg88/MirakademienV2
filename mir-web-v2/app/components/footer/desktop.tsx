'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Link, TextField, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import MirButton from '../mir-button';
import { useState } from 'react';

export default function FooterDesktop() {
    const theme = useTheme();
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!email) {
            console.log("Email is required");
        } else {
            console.log("Subscribed with email:", email);
        }
    };
    return (
        <Box key="l1" sx={{ height: 545, width: "100%", backgroundColor: theme.palette.background.default, mt: "112px" }}>
            <Box key="l2_1" sx={{ paddingTop: "80px", pl: "64px", pr: "64px", display: "flex", justifyContent: "space-between", alignItems: "top" }}>
                <Box key="l3_1" sx={{ width: "684px", display: "flex", justifyContent: 'space-between' }}>
                    <Image src="/mir_logo.png" width={121.85} height={61.25} alt="MIR Logo" />
                    <Box key="l4_1">
                        <Typography sx={{ fontWeight: "bold" }}>About Us</Typography>
                        <Box sx={{ pt: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                            <Link underline='none' href="/our-story">
                                <Typography>Our Story</Typography>
                            </Link>
                            <Link underline='none' href="/services">
                                <Typography>Services</Typography>
                            </Link>
                            <Link underline='none' href="/projects">
                                <Typography>Projects</Typography>
                            </Link>
                            <Link underline='none' href="/contacts">
                                <Typography>Contacts</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box key="l4_2">
                        <Typography sx={{ fontWeight: "bold" }}>Resources</Typography>
                        <Box sx={{ pt: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                            <Link underline='none' href="/news">
                                <Typography>News</Typography>
                            </Link>
                            <Link underline='none' href="/blog">
                                <Typography>Blog</Typography>
                            </Link>
                            <Link underline='none' href="/reports">
                                <Typography>Reports</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box key="l3_2" sx={{ width: 500, marginBottom: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>Subscribe</Typography>
                        <Typography>Join our newsletter to stay up to date on features and releases.</Typography>
                        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                <TextField
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" // Built-in HTML5 validation for email format
                                    required // Ensures that the field is mandatory
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: "40px",
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "40px",
                                        },
                                        flexGrow: 1,
                                        mr: 2,
                                        "& .MuiInputBase-input": {
                                            color: "black",
                                        },
                                    }}
                                    variant="outlined"
                                />
                                <MirButton
                                    type="submit"
                                    variant="outlined"
                                    color="info"
                                >
                                    Subscribe
                                </MirButton>
                            </Box>
                        </form>
                        <Typography variant="caption">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box key="l2_2" sx={{ pl: "64px", pr: "64px", pt: 15 }}>
                <Divider sx={{ width: "100%", mb: 5, background: "black" }} />
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ display: "flex", gap: 4 }}>
                        <Typography variant='caption'>© 2023 Mir Akademien. All rights reserved.</Typography>
                        <Link href="/privacy-policy">
                            <Typography variant='caption' sx={{ textDecoration: "underline" }}>Privacy Policy</Typography>
                        </Link>
                        <Link href="/terms-and-conditions">
                            <Typography variant="caption" sx={{ textDecoration: "underline" }}>Terms and Conditions</Typography>
                        </Link>
                    </Box>
                    <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
                        <InstagramIcon />
                        <LinkedInIcon />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
