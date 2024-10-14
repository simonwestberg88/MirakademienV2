"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import HeaderDesktop from "./desktop";
import HeaderMobile from "./mobile";

export default function ProjectsHeader() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<HeaderDesktop />) : (
                <HeaderMobile />
            )}
        </Box>
    );
}