"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import CoverDesktop from "./desktop";
import CoverMobile from "./mobile";

export default function Cover() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<CoverDesktop/>) : (
            <CoverMobile />
        )}
        </Box>

    );
}