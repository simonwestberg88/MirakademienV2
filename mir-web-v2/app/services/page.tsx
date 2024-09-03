"use client"
import { Box, Typography, Link } from "@mui/material";import BlueButton from "../components/blue_button";
import Footer from "../components/footer";

export default function Services() {
    return (
        <Box>
            <Box sx={{ ml: "64px", display: "flex", gap: "32px", mt: "24px", mb: "24px" }}>
                <Link href="/" underline="none" sx={{ fontWeight: 500 }}>Home</Link>
                <Typography>Our services</Typography>
            </Box>
            <Box
                sx={{
                    ml: "64px",
                    mr: "64px",
                    height: "350px", // Set the height of the Box
                }}
            >
                <Box
                    sx={{
                        borderRadius: "30px",
                        width: '100%', // Set the width of the Box
                        height: "100%", // Set the height of the Box
                        backgroundImage: 'url(/services/cover.png)', // Set the background image
                        backgroundSize: 'cover', // Make sure the image covers the entire box
                        backgroundPosition: 'center', // Center the image in the box
                        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", pt: "39px", gap: "24px" }}>
                        <Typography color="white" sx={{ fontWeight: 600 }}>Our services</Typography>
                        <Typography variant="h2" color="white">Unlock Your Potential</Typography>
                        <BlueButton text="Contact us"></BlueButton>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}