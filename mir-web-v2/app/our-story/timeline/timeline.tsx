"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TimelineDesktop from "./desktop";
import TimelineMobile from "./mobile";

export default function OurStoryTimeline() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<TimelineDesktop/>) : (
            <TimelineMobile />
        )}
        </Box>

    );
}