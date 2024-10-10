"use client"
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CoachingDesktop from "./desktop";
import CoachingMobile from "./mobile";

export default function ServiceCoaching() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<CoachingDesktop/>) : (
            <CoachingMobile />
        )}
        </Box>
    );
}