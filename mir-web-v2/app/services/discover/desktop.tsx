"use client"
import MirButton from "@/app/components/mir-button";
import { Box, Typography, Button, useTheme } from "@mui/material";

export default function DiscoverDesktop() {
    const theme = useTheme();
    return (
        <Box key="b1"
            sx={{
                height: "421px",
                pt: "128px",
                mb: "-128px"
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: "100%",
                    backgroundImage: "url(/services/discover.png)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <Box key="b2" sx={{
                    display: "flex", flexDirection: "column", pt: "39px", gap: "24px", ml: "64px",
                    mr: "64px"
                }}>
                    <Typography variant="h2" color="white">Discover Our Services Today</Typography>
                    <Typography color="white">Contact us to learn more about our services or to schedule a consultation.</Typography>
                    <MirButton color="info" variant="contained"
                        sx={{
                            width: 'auto',
                        }}
                    >Lean more</MirButton>
                </Box>
            </Box>
        </Box>
    );
}