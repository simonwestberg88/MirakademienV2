"use client"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ProjectsSupportDesktop from "./desktop";
import ProjectsSupportMobile from "./mobile";

export default function ProjectsSupport() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box>
            {isDesktop ? (<ProjectsSupportDesktop />) : (
                <ProjectsSupportMobile />
            )}
        </Box>
    );
}
