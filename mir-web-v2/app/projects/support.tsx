"use client"
import { Box, Button, Typography, useTheme } from "@mui/material";

export default function ProjectsSupport() {
    const theme = useTheme();
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}> {/* Set full width */}
            <Box sx={{ pt: "112px", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "768px", alignItems: "center", textAlign: "center" }}> {/* Center content and text */}
                <Typography variant="h2">Support Our Exciting New Projects</Typography>
                <Typography>Discover how you can make a difference and contribute to our impactful projects.</Typography>
                <Box sx={{ display: "flex", gap: 4 }}>
                    <Button sx={{
                        borderRadius: '30px',
                        color: theme.palette.background.default,
                        background: "#199DEA",
                        fontSize: theme.typography.body1.fontSize,
                        lineHeight: theme.typography.body1.lineHeight,
                        fontFamily: theme.typography.body1.fontFamily,
                        textTransform: "none"
                    }}
                    >Get Involved</Button>
                    <Button
                        variant='outlined'
                        color="info"
                        sx={{
                            borderRadius: 40,
                            fontSize: theme.typography.body1.fontSize,
                            lineHeight: theme.typography.body1.lineHeight,
                            fontFamily: theme.typography.body1.fontFamily,
                            textTransform: "none"
                        }}>Learn more</Button> {/* Fix spelling of "Learn more" */}
                </Box>
            </Box>
        </Box>
    );
}
