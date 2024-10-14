"use client"
import MirButton from "@/app/components/mir-button";
import { Box, Typography, useTheme } from "@mui/material";

export default function ProjectsSupportDesktop() {
    const theme = useTheme();
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}> {/* Set full width */}
            <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "768px", alignItems: "center", textAlign: "center" }}> {/* Center content and text */}
                <Typography variant="h2">Support Our Exciting New Projects</Typography>
                <Typography>Discover how you can make a difference and contribute to our impactful projects.</Typography>
                <Box sx={{ display: "flex", gap: 4 }}>
                    <MirButton
                        variant="contained"
                        sx={{ width: "174px" }}
                    >Get Involved</MirButton>
                    <MirButton
                        variant='outlined'
                        color="info"
                        sx={{ width: "174px" }}

                    >Learn more</MirButton>
                </Box>
            </Box>
        </Box>
    );
}
