'use client';

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Link, TextField, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import MirButton from '../mir-button';
import { useState } from 'react';

export default function FooterMobile() {
    const theme = useTheme();
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // HTML5 validation automatically handles email format validation
        if (!email) {
            console.log("Email is required");
        } else {
            console.log("Subscribed with email:", email);
            // Add any additional submission logic here
        }
    };
    return (
        <Box display="flex" flexDirection="column" key="l1" bgcolor={theme.palette.background.default} padding="20px" gap="48px" pb="80px">
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Typography sx={{ fontWeight: "bold" }}>Subscribe</Typography>
                <Typography>Join our newsletter to stay up to date on features and releases.</Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" // Built-in HTML5 validation for email format
                        required // Ensures that the field is mandatory
                        sx={{
                            width: "100%",
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
                        sx={{ mt: "16px" }}
                        type="submit"
                        variant="outlined"
                        color="info"
                        fullWidth
                    >
                        Subscribe
                    </MirButton>
                </form>
                <Typography variant="caption">By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</Typography>
            </Box>
            <Box key="l2_2" display="flex" flexDirection="column" gap="24px">
                <Divider sx={{ width: "100%", mb: 5, background: "black" }} />
                <Box display= "flex" gap="16px">
                    <InstagramIcon />
                    <LinkedInIcon />
                </Box>
                <Link href="/privacy-policy">
                    <Typography variant='caption' sx={{ textDecoration: "underline" }}>Privacy Policy</Typography>
                </Link>
                <Link href="/terms-and-conditions">
                    <Typography variant="caption" sx={{ textDecoration: "underline" }}>Terms and Conditions</Typography>
                </Link>
                <Typography variant='caption'>© 2023 Mir Akademien. All rights reserved.</Typography>
            </Box>
        </Box>
    );
}
