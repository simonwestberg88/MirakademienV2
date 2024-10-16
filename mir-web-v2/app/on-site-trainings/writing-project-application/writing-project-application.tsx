"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import WritingProjectApplicationDesktop from "./desktop";
import WritingProjectApplicationMobile from "./mobile";

export default function WritingProjectApplication() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<WritingProjectApplicationDesktop/>) : (
            <WritingProjectApplicationMobile />
        )}
        </Box>
    );
}