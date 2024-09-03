"use client"
import { Box, Typography, Link, Button, useTheme } from "@mui/material";

export default function ServicesDiscover() {
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
                    <Typography color="white" sx={{ fontWeight: 600 }}>Contact us to learn more about our services or to schedule a consultation.</Typography>
                    <Button color="info" variant="contained"
                        sx={{
                            borderRadius: 40, textTransform: "none",
                            color: "white",
                            width: 'auto',
                            alignSelf: 'flex-start',
                            ...theme.typography.body1,
                        }}
                    >Lean more</Button>
                </Box>
            </Box>
        </Box>
    );
}