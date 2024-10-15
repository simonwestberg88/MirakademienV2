"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import StayInformedDesktop from "./desktop";
import StayInformedMobile from "./mobile";

export default function StayInformed() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<StayInformedDesktop/>) : (
            <StayInformedMobile />
        )}
        </Box>

    );
}