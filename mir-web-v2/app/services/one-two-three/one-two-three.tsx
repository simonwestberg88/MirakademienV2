"use client"

import { Box, useMediaQuery, useTheme } from "@mui/material";
import Services123Desktop from "./desktop";
import Services123Mobile from "./mobile";

export default function Services123() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<Services123Desktop/>) : (
            <Services123Mobile />
        )}
        </Box>
    );
}