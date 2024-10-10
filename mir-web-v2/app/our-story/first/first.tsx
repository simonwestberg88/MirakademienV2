"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import OurStoryStartDesktop from "./desktop";
import OurStoryStartMobile from "./mobile";

export default function OurStoryStart() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<OurStoryStartDesktop />) : (
            <OurStoryStartMobile/>
        )}
        </Box>

    );
}