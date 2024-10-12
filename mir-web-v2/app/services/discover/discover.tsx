"use client"
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import DiscoverDesktop from "./desktop";
import DiscoverMobile from "./mobile";

export default function ServicesDiscover() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<DiscoverDesktop/>) : (
            <DiscoverMobile />
        )}
        </Box>
    );
}